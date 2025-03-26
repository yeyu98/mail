/*
 * @Author: yeyu98
 * @Date: 2025-03-24 22:08:34
 * @LastEditors: yeyu98
 * @LastEditTime: 2025-03-27 01:44:14
 * @Description:
 */
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
	out: './drizzle',
	schema: './app/lib/schema.ts',
	dialect: 'sqlite',
})
