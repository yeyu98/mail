const { exec } = require('child_process');
const _process = require('node:process')
const path = require('node:path')
const [$1,$2, dbName, execEnv, ...args] = _process.argv

interface ExecResult {
    stdout: string;
    stderr: string;
}

const promiseExec = (command: string): Promise<ExecResult> => {
    return new Promise<ExecResult>((resolve, reject) => {
        exec(command, (err: string, stdout: string, stderr: string) => {
            if (err) {
                reject(err)
            }
            resolve({stdout, stderr})
        });
    }).catch((err: string) => {
        console.error(`migrate-db exec error: ${err}`);
        process.exit(1)
    })
}

const execMigrations = async (dbName: string, execEnv: string) => {
    try {
        const {stdout} = await promiseExec('drizzle-kit generate')
        if(stdout.indexOf('nothing to migrate') !== -1) {
            return
        }
        await promiseExec(`npx wrangler d1 migrations apply ${dbName} ${execEnv}`)
    } catch (err) {
        console.error(`migrate-db exec error: ${err}`);
        process.exit(1)
    }
}

execMigrations(dbName, execEnv)
