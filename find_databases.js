import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
dotenv.config();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function findDatabases() {
    try {
        console.log('Searching for accessible databases...');
        const response = await notion.search({});

        console.log(`Raw search results count: ${response.results.length}`);
        console.log('--- All results ---');

        response.results.forEach(item => {
            let title = 'Untitled';
            let type = item.object;

            if (type === 'database') {
                // @ts-ignore
                if (item.title && item.title.length > 0) title = item.title[0].plain_text;
            } else if (type === 'page') {
                // @ts-ignore
                if (item.properties && item.properties.title) {
                    // @ts-ignore
                    title = item.properties.title.title?.[0]?.plain_text || 'Untitled Page';
                } else {
                    // Try to find any property that looks like a title
                    // @ts-ignore
                    const titleProp = Object.values(item.properties).find(p => p.type === 'title');
                    // @ts-ignore
                    if (titleProp && titleProp.title.length > 0) title = titleProp.title[0].plain_text;
                }
            }

            console.log(`Type: ${type} | ID: ${item.id} | Title: ${title}`);
        });

    } catch (error) {
        console.error('Error searching for databases:', error);
    }
}

findDatabases();
