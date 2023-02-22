import * as functions from "firebase-functions";
import express from "express";
import request from "request";
import { JSDOM } from "jsdom";

const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//getWether Moduleから天気データを取得する。

app.get("/", async (req: express.Request, res: express.Response) => {
  res.send("Hello,signage API!");
});

// 今日の天気データを取得して送信
app.get("/today", async (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(await getWeather(".today-weather")));
});

// 明日の天気データを取得して送信
app.get("/tomorrow", async (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(await getWeather(".tomorrow-weather")));
});

async function getWeather(whenDate: string) {
  const url: string = "https://tenki.jp/forecast/1/4/2300/1202/";
  let telop: string | null | undefined;
  let highTemp: string | null | undefined;
  let highTempDiff: string | null | undefined;
  let lowTemp: string | null | undefined;
  let lowTempDiff: string | null | undefined;
  let zeroSix: string | null | undefined;
  let sixTwelve: string | null | undefined;
  let twelveEighteen: string | null | undefined;
  let eighteenTwentyFour: string | null | undefined;

  try {
    const responce:any = await new Promise((resolve, reject) => {
      request(url, (error, res, body) => {
        if (error) {
          reject(error);
        } else {
          resolve({ res, body });
        }
      });
    });

    const dom: JSDOM = new JSDOM(responce.body);

    telop = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".weather-telop")?.textContent;
    highTemp = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".high-temp.temp")?.querySelector(".value")?.textContent;
    highTempDiff = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".high-temp.tempdiff")?.textContent;
    lowTemp = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".low-temp.temp")?.querySelector(".value")?.textContent;
    lowTempDiff = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".low-temp.tempdiff")?.textContent;
    zeroSix = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".rain-probability")?.children[1].textContent;
    sixTwelve = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".rain-probability")?.children[2].textContent;
    twelveEighteen = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".rain-probability")?.children[3].textContent;
    eighteenTwentyFour = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".rain-probability")?.children[4].textContent;

      return {
        "telop": telop,
            "highTemp": highTemp,
            "highTempDiff": highTempDiff,
            "lowTemp": lowTemp,
            "lowTempDiff": lowTempDiff,
            "zeroSix": zeroSix,
            "sixTwelve": sixTwelve,
            "twelveEighteen": twelveEighteen,
            "eighteenTwentyFour": eighteenTwentyFour
    };
  } catch (error) {
    console.error(error);
    return error;
  }
}

const api = functions.https.onRequest(app);
export { api };