/*
 * @Author: yeyu98
 * @Date: 2025-03-31 20:16:43
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-03-31 22:36:58
 * @Description: 
 */
import { drizzle } from 'drizzle-orm/d1';
import { Customers } from './lib/schema';

// interface Env {
//   DB: D1Database
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleEmail = async (message: any): Promise<Response> => {
    const text = new Response(message.raw)
    console.log(text)
    return new Response('Email received', {status: 200})
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async fetch(request: Request, env: any): Promise<Response> {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async email(message: any): Promise<void> {
    await handleEmail(message)
  },
}
  

