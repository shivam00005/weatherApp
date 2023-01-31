import curentWeather from "./functions.js"
import { hourlyCards, MainWeatherReportArea, nextWeekWeather } from "./functions.js"

// change background function

function backgroundChange() {

    let time = new Date();
    let hours = time.getHours();

    if (6 < hours < 19) {
        document.body.style.backgroundImage = "url('images/day.jpg')";
    } else {
        document.body.style.backgroundImage = "url('images/night.jpg')";

    }

}
backgroundChange();
curentWeather();
hourlyCards();
MainWeatherReportArea();
nextWeekWeather();