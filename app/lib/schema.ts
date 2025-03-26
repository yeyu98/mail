/*
 * @Author: yeyu98
 * @Date: 2025-03-27 01:40:01
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-03-27 01:44:48
 * @Description: 
 */
import { int, text, sqliteTable } from 'drizzle-orm/sqlite-core'
export const Customers = sqliteTable("Customers", {
	CustomerId: int().primaryKey({autoIncrement: true}),
	CompanyName: text().notNull(),
	ContactName: text().notNull()
})