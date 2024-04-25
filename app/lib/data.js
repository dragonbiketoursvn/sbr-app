import { sql } from '@vercel/postgres'

export async function testQuery() {
    try {
        const result = await sql`SELECT * FROM test_table LIMIT 1`;
        return result.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.');
    }
}