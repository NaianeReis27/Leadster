import express from 'express'
import { Request, Response } from 'express';
import { videos } from './database/db';
const app = express();

app.get('/', (req : Request, res: Response)  => {
    res.json(videos);
});

app.listen(3333, ()=> console.log("server is runnning => port3333"))