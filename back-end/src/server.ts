import express from 'express'
import { Request, Response } from 'express';
import { videos } from './database/db';
const app = express();

app.get('/videos', (req : Request, res: Response)  => {
    const {page = 0} = req.query;

    const limite: number = 9;

    let lastPage: number = 1;

    const countVideos = videos.length;

    if(countVideos !== 0){
        lastPage = Math.ceil(countVideos/limite);
    }else{

        return res.status(400).json({
            message: "No videos were found"
        })
    }

    const resp = videos.slice(Number(page)*limite, Number(page)*limite + 9)
    
    res.json(resp);
});

app.listen(3333, () => console.log("server is runnning => port3333"))