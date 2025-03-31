import { drizzle } from 'drizzle-orm/d1';
import { Customers } from './lib/schema';

// interface Env {
//   DB: D1Database
// }

const handleEmail = async (message: any, env: any, ctx: any): Promise<void> => {
    const text = new Response(message.raw)
    console.log(text)
}

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    try {
      const url = new URL(request.url)
      const db = drizzle(env.DB)
      if(url.pathname == '/') {
        const {success} = await db.insert(Customers).values({
          CompanyName: 'test',
          ContactName: 'test'
        })
        return Response.json({success})
      }
      if(url.pathname == '/api/customers') {
        const customers = await db.select().from(Customers)
        return Response.json(customers)
      }
      return new Response('Not Found', {status: 404})
    } catch (error) {
      console.error(error)
      return new Response(`Internal Server Error ${error}`, {status: 500})
    }
  },
  async email(message: any, env: any, ctx: any): Promise<void> {
    await handleEmail(message, env, ctx)
  },
}
  

