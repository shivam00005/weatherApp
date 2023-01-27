import curentWeather from "./functions.js"
import { hourlyCards } from "./functions.js"

// change background function

function backgroundChange() {

    let time = new Date();
    let hours = time.getHours();

    if (hours > 6) {
        document.body.style.backgroundImage = "url('images/day.jpg')";
    } else {
        document.body.style.backgroundImage = "url('images/night.jpg')";

    }

}
backgroundChange();
curentWeather();
hourlyCards();