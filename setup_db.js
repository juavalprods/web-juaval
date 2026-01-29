import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const dbId = '2f745308-9183-8177-ac84-c03170b94ed3';

async function setupDatabase() {
    try {
        console.log(`Setting up Main Database ${dbId}...`);

        await notion.databases.update({
            database_id: dbId,
            title: [
                {
                    text: {
                        content: 'Contactos Web Juaval',
                    },
                },
            ],
            properties: {
                'Company': { rich_text: {} },
                'Phone': { phone_number: {} },
                'Email': { email: {} },
                'Instagram': { url: {} },
                'Message': { rich_text: {} },
                'Date': { date: {} },
                'Status': { status: {} }
            }
        });

        console.log('SUCCESS: Database schema updated and renamed to "Contactos Web Juaval"!');

    } catch (error) {
        console.error('Error updating database:', error.message);
    }
}

setupDatabase();
