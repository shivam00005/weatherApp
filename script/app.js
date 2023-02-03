import curentWeather from "./functions.js"
import { hourlyCards, mainWeatherReportArea, nextWeekWeather, dateAndTime, backgroundChange, apiSetUp } from "./functions.js"

let data = apiSetUp();
backgroundChange();
curentWeather(data);
hourlyCards(data);
// mainWeatherReportArea();
// dateAndTime();
nextWeekWeather(data);