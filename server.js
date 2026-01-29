import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Client } from '@notionhq/client';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables
dotenv.config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Notion Client
const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

// Helper to format date
const formatDate = (date) => {
    return new Date(date).toISOString();
};

app.post('/api/leads', async (req, res) => {
    try {
        const { name, company, phone, email, instagram, message } = req.body;

        if (!databaseId) {
            throw new Error('NOTION_DATABASE_ID is not defined in .env file');
        }

        const response = await notion.pages.create({
            parent: {
                database_id: databaseId,
            },
            properties: {
                'Name': {
                    title: [
                        {
                            text: {
                                content: name,
                            },
                        },
                    ],
                },
                'Company': {
                    rich_text: [
                        {
                            text: {
                                content: company || '',
                            },
                        },
                    ],
                },
                'Phone': {
                    phone_number: phone,
                },
                'Email': {
                    email: email,
                },
                'Instagram': {
                    url: instagram || null,
                },
                'Message': {
                    rich_text: [
                        {
                            text: {
                                content: message,
                            },
                        },
                    ],
                },
                'Date': {
                    date: {
                        start: new Date().toISOString()
                    }
                },
                'Status': {
                    status: {
                        name: 'New Lead'
                    }
                }
            },
        });

        console.log('Success! Entry added.');
        res.status(200).json({ success: true, message: 'Lead added to Notion', data: response });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Error adding to Notion', error: error.message });
    }
});

app.get('/health', (req, res) => {
    res.send('Server is running');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
