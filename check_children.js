import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const pageId = '2f745308-9183-8107-af31-e183ba29eef1';

async function checkChildren() {
    try {
        console.log(`Checking children of page ${pageId}...`);
        const response = await notion.blocks.children.list({
            block_id: pageId,
        });

        if (response.results.length === 0) {
            console.log('Page is empty.');
        } else {
            response.results.forEach(block => {
                console.log(`Block Type: ${block.type} | ID: ${block.id}`);
                if (block.type === 'child_database') {
                    console.log('>>> FOUND DATABASE! Title:', block.child_database.title);
                    console.log('>>> DATABASE ID:', block.id);
                }
            });
        }

    } catch (error) {
        console.error('Error:', error.message);
    }
}

checkChildren();
