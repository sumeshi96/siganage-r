import React from "react";
import ReactDOM from "react-dom";
import App from "../Views/App/App";

const root = document.getElementById("root");

interface ForecastData {
    telop: string,
    highTemp: string,
    highTempDiff: string,
    lowTemp: string,
    lowTempDiff: string,
    zeroSix: string,
    sixTwelve: string,
    twelveEighteen: string,
    eighteenTwentyFour: string
}
const forecastInitData: ForecastData = { "telop": "ー", "highTemp": "00", "highTempDiff": "[00]", "lowTemp": "00", "lowTempDiff": "[00]", "zeroSix": "---", "sixTwelve": "---", "twelveEighteen": "---", "eighteenTwentyFour": "---" };
// ReactDOM.render
ReactDOM.render(<App forecastData={forecastInitData} />, root);
