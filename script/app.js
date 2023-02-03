import curentWeather from "./functions.js"
import { hourlyCards, mainWeatherReportArea, nextWeekWeather, dateAndTime, backgroundChange, apiSetUp } from "./functions.js"

backgroundChange();
curentWeather(apiSetUp());
hourlyCards();
mainWeatherReportArea();
dateAndTime();
nextWeekWeather();