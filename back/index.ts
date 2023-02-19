import express from 'express';
import { getWeather } from "./get-weather.js"

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//getWether Moduleから天気データを取得する。

// 今日の天気データを取得して送信
app.get("/today", async(req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(await getWeather(".today-weather")));
});

// 明日の天気データを取得して送信
app.get("/tomorrow", async(req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(await getWeather(".tomorrow-weather")));
});

// 3000番ポートを開放　5000にした方がいい？
app.listen(3000, () => {
    console.log("Start on port 3000.")
});