import express from "express";
import { Request, Response } from "express";
import { videos } from "./database/db";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/videos", (req: Request, res: Response) => {
  let { page = 0 } = req.query;
  page = Number(page);

  const limite: number = 9;

  let lastPage: number = 0;

  const countVideos = videos.length;

  if (countVideos !== 0) {
    lastPage = Math.ceil(countVideos / limite) -1;
  } else {
    return res.status(400).json({
      message: "No videos were found",
    });
  }

  if(page > lastPage){
    return res.status(400).json({
        message: "Page not found",
      });
  }
  const pagination = {
    path: 'videos',
    page,
    lastPage,
    prev_page_url: page - 1 >=0 ? page -1 : null,
    next_page_url: page + 1 >= lastPage? lastPage: page +1
  }

  const data = videos.slice(page * limite, page * limite + 9);

  res.json({
    pagination,
    data
  });
  
});

app.listen(3333, () => console.log("server is runnning => port3333"));
