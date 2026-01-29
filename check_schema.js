import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const dbId = '2f745308-9183-8177-ac84-c03170b94ed3';

async function checkSchema() {
    try {
        const db = await notion.databases.retrieve({ database_id: dbId });
        console.log('Database Schema (Properties):');
        console.log(JSON.stringify(Object.keys(db.properties), null, 2));

        // Also check the second one just in case
        const db2Id = '2f745308-9183-81b6-a85e-eba78a73fb25';
        const db2 = await notion.databases.retrieve({ database_id: db2Id });
        console.log('\nDatabase 2 Schema (Properties):');
        console.log(JSON.stringify(Object.keys(db2.properties), null, 2));

    } catch (error) {
        console.error('Error:', error.message);
    }
}

checkSchema();
