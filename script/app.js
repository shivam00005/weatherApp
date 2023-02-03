import curentWeather from "./functions.js"
import { hourlyCards, mainWeatherReportArea, nextWeekWeather, dateAndTime, backgroundChange, apiSetUp } from "./functions.js"

let data = apiSetUp();
backgroundChange();
curentWeather(data);
hourlyCards(data);
(async function () {
    await mainWeatherReportArea(data);
    await dateAndTime();
})();
// nextWeekWeather();