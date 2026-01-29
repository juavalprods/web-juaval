import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const targetId = '2f745308-9183-8107-af31-e183ba29eef1';

async function checkObject() {
    try {
        console.log(`Checking object ${targetId}...`);
        // Try retrieving as database
        try {
            const db = await notion.databases.retrieve({ database_id: targetId });
            console.log('SUCCESS: It IS a database!');
            console.log('Title:', db.title[0]?.plain_text);
            console.log('Properties:', Object.keys(db.properties));
            return;
        } catch (e) {
            console.log('Not a database (or retrieve failed):', e.message);
        }

        // Try retrieving as page
        try {
            const page = await notion.pages.retrieve({ page_id: targetId });
            console.log('It is a PAGE.');
            console.log('URL:', page.url);
        } catch (e) {
            console.log('Not a page either:', e.message);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

checkObject();
