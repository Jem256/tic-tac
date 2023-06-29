import express from 'express';
import cors from 'cors';
import { StreamChat } from 'stream-chat';
const app = express();

app.use(cors());
app.use(express.json());

const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRECT;

const serverClient = new StreamChat.getInstance(api_key, api_secret);

app.listen(3001, () => {
    console.log('Server running at 3001');
});
