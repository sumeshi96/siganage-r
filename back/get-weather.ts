import { got } from 'got';
import { JSDOM } from 'jsdom';

export async function getWeather(whenDate:string) {
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
        const responce = await got(url);
        const dom: JSDOM = new JSDOM(responce.body);
        
        telop = dom.window.document.querySelector(`${whenDate}`)?.querySelector(".weather-telop")?.textContent;
        highTemp =dom.window.document.querySelector(`${whenDate}`)?.querySelector(".high-temp.temp")?.querySelector(".value")?.textContent;
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
        }
    } catch (error) {
        console.error(error);
    }
}
/*
        console.log(telop);
        console.log(highTemp);
        console.log(highTempDiff);
        console.log(lowTemp);
        console.log(lowTempDiff);
        console.log(zeroSix);
        console.log(sixTwelve);
        console.log(twelveEighteen);
        console.log(eighteenTwentyFour);
*/