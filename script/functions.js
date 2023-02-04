// sending default loction to API query
window.onload = function () {
    apiSetUp()
}
//change backgound color woth respect time
export const backgroundChange = () => {
    let time = new Date();
    let hours = time.getHours();
    if (5 <= hours && hours < 8) {//Morning
        document.body.style.backgroundImage = "url('images/sunrise.jpg')";
    }
    if (8 <= hours && hours < 17) {//Day
        document.body.style.backgroundImage = "url('images/day.jpg')";
    }
    if (17 <= hours && hours < 19) {//Evening
        document.body.style.backgroundImage = "url('images/evening.jpg')";
    }
    if (19 <= hours) {//Night
        document.body.style.backgroundImage = "url('images/night.jpg')";
    }
    else if (hours < 5) {//Night
        document.body.style.backgroundImage = "url('images/night.jpg')";
    }
}

// fetch api  // api is form  rapidapi.com
export const apiSetUp = async (city, country, region) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0de5154fc9msh280c254e779df51p107213jsna1cb069469b2',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    if (city == null && region == null && country == null) {
        const retrive = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=Regina Saskatchwen Canada&days=3`, options);
        if (retrive.status === 200) {
            const response = await retrive.json();
            return response
        } else if (retrive.status === 400) {
            const err = await retrive.json();
            console.log(err)
        }
    } else {
        const retrive = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city} ${region} ${country}&days=3`, options)
        if (retrive.status === 200) {
            const response = await retrive.json();

            let curentWeather = response.current;
            let weatherForecast = response.forecast.forecastday[0];
            let currentLocation = response.location;

            //poulating data to current card
            img.src = curentWeather.condition.icon;
            weatherConditionText.innerText = curentWeather.condition.text;
            temprature.innerText = curentWeather.temp_c;
            maxMin.innerText = `Max Temp ${weatherForecast.day.maxtemp_c}°c | Min Temp ${weatherForecast.day.mintemp_c}°c`;
            lastupdate.innerText = `Last Update : ${curentWeather.last_updated}`;
            cityName.innerText = `${currentLocation.name}`
            countryRegion.innerText = `${currentLocation.region}, ${currentLocation.country}`;

            // populating data to hourly card
            heading.innerText = `${currentLocation.name} hourly Weather Report`;
            for (let i = 0; i < weatherForecast.hour.length; i++) {
                document.getElementById(`hourCardIcon${i}`).src = weatherForecast.hour[i].condition.icon;
                document.getElementById(`hourlyTemprature${i}`).innerText = `${weatherForecast.hour[i].temp_c}°c`;
            }

            // populating data in main display area
            feelslike.innerText = ` ${curentWeather.feelslike_c}°c`
            visibility.innerText = `${curentWeather.vis_km}km`;
            humidity.innerText = `${curentWeather.humidity}%`;
            uv.innerText = ` ${curentWeather.uv}km`;
            pressure.innerText = `${curentWeather.pressure_mb}mb`;
            wind.innerText = `${curentWeather.wind_kph}kph`;

            //populating data to next two day forecast
            for (let i = 1; i < response.forecast.forecastday.length; i++) {
                let dayData = response.forecast.forecastday;
                const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                let nextDate = dayData[i].date;
                let dateSplit = nextDate.split('-')
                nextDate = dateSplit.join(',')
                const d = new Date(nextDate);
                let day = weekday[d.getDay()];

                document.getElementById(`nextWeekDay${i}`).innerText = `${day}`;
                document.getElementById(`NextWeekdate${i}`).innerText = dayData[i].date;
                document.getElementById(`nextWeekImg${i}`).src = dayData[i].day.condition.icon;
                document.getElementById(`NextWeekText${i}`).innerText = dayData[i].day.condition.text;
                document.getElementById(`NextWeekTemprature${i}`).innerText = `Max Temp ${dayData[i].day.maxtemp_c}°C | Min Temp ${dayData[i].day.mintemp_c}°C`;

            }

        } else if (retrive.status === 400) {
            const err = await retrive.json();
            console.log(err)
        }
    }
}

//user search 
let search = document.getElementById('search');
search.addEventListener('click', (e) => {
    e.preventDefault();
    let city = document.getElementById('city').value;
    let region = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    apiSetUp(city, country, region);
});

// current waether function 
const curentWeather = async (data) => {

    let currentReport = await data;
    let report = currentReport.current;
    let reportLocation = currentReport.location;
    let currenDateForecast = currentReport.forecast.forecastday[0].day;

    let output = document.getElementById('main');

    let currentweather = document.createElement('div');
    currentweather.className = 'currentWeather';

    let heading = document.createElement('h2');
    heading.className = "heading_2";

    let description = document.createElement('div');
    description.className = 'weatherDescription';

    let img = document.createElement('img');
    img.id = 'img';
    img.setAttribute('src', `${report.condition.icon}`);
    img.setAttribute('alt', 'current weather icon');

    let text = document.createElement('p');
    text.id = 'weatherConditionText';
    text.innerText = `${report.condition.text}`;

    let temprature = document.createElement('h2');
    temprature.id = "temprature"
    temprature.className = "temp";
    temprature.innerText = `${report.temp_c}°`;

    let maxMin = document.createElement('p');
    maxMin.id = 'maxMin'
    maxMin.className = "currenDate";
    maxMin.innerText = `Max Temp ${currenDateForecast.maxtemp_c}°c | Min Temp ${currenDateForecast.mintemp_c}°c`

    let currenDate = document.createElement('p');
    currenDate.id = 'lastupdate'
    currenDate.className = "currenDate";
    currenDate.innerText = `Last Update : ${report.last_updated}`

    let location = document.createElement('p');
    let icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';
    icon.innerText = 'pin_drop';

    let address = document.createElement('span');
    address.className = 'location';
    address.id = 'cityName';
    address.innerText = `${reportLocation.name}`;

    let countryRegion = document.createElement('span');
    countryRegion.className = 'location';
    countryRegion.id = 'countryRegion';
    countryRegion.innerText = `${reportLocation.region}, ${reportLocation.country}`;

    currentweather.appendChild(heading);
    description.appendChild(img);
    description.appendChild(text);
    description.appendChild(temprature);
    description.appendChild(currenDate);
    location.appendChild(icon);
    location.appendChild(address);
    description.appendChild(maxMin);
    description.appendChild(location);
    description.appendChild(countryRegion);
    currentweather.appendChild(description);
    output.appendChild(currentweather);

}
export default curentWeather;

// create carsoule
const carsoule = () => {
    // Select the carousel you'll need to manipulate and the buttons you'll add events to
    const Cards = document.querySelector(".wrapper");
    const carousel = document.getElementById("hourTime");
    const card = carousel.querySelector('.card');
    const leftButton = Cards.querySelector("#left-button");
    const rightButton = Cards.querySelector("#right-button");

    // Prepare to limit the direction in which the carousel can slide,
    // and to control how much the carousel advances by each time.
    // In order to slide the carousel so that only three cards are perfectly visible each time,
    // you need to know the carousel width, and the margin placed on a given card in the carousel

    let carouselWidth = carousel.offsetWidth;
    const cardStyle = card.currentStyle || window.getComputedStyle(card)
    const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

    const cardCount = document.querySelectorAll("[data-target='card']").length;

    // Define an offset property to dynamically update by clicking the button controls
    // as well as a maxX property so the carousel knows when to stop at the upper limit
    // both maxX and max is used to limit left and right movement of carsoule

    let offset = 0;
    let rightLimitCard = 8;
    let leftLimitCard = 6;
    const maxRightCarsoule = -Math.floor(((cardCount / rightLimitCard) * carouselWidth + (cardMarginRight * (cardCount / rightLimitCard)) - carouselWidth - cardMarginRight));
    const maxLeftCarsoule = ((cardCount / leftLimitCard) * carouselWidth + (cardMarginRight * (cardCount / leftLimitCard)) - carouselWidth - cardMarginRight);

    // Add the click events
    leftButton.addEventListener("click", function () {
        if (offset !== maxLeftCarsoule) {
            offset += (carouselWidth + cardMarginRight);
            carousel.style.transform = `translateX(${offset}px)`;
        }
    })
    rightButton.addEventListener("click", function () {
        if (offset !== maxRightCarsoule) {
            offset -= (carouselWidth + cardMarginRight);
            carousel.style.transform = `translateX(${offset}px)`;
        }
    })
}


// this function dispay hourly weather report
export async function hourlyCards(data) {
    let weatherforecast = await data;
    let currenDateForecast = weatherforecast.forecast.forecastday[0];
    let reportLocation = weatherforecast.location;

    let output = document.getElementById("main");
    let dayTimeCard = document.createElement('div');
    dayTimeCard.className = "dayTimeCard";
    dayTimeCard.id = "dayTimeCardWraper";

    let heading = document.createElement('h2');
    heading.id = 'heading';
    heading.innerText = `${reportLocation.name} hourly Weather Report`;

    dayTimeCard.appendChild(heading);

    let cards = document.createElement('div');
    cards.className = 'wrapper';

    let dayCard = document.createElement('ol');
    dayCard.className = "dayCard carousel";
    dayCard.id = "hourTime"
    dayCard.setAttribute('data-target', 'carousel');

    for (let i = 0; i < currenDateForecast.hour.length; i++) {
        let card = document.createElement('li');
        card.className = 'card';
        card.setAttribute('data-target', 'card');

        let timecard = document.createElement('div');
        timecard.className = 'timecard';

        let timeImg = document.createElement('img');
        timeImg.id = 'hourCardIcon' + i;
        timeImg.setAttribute('src', `${currenDateForecast.hour[i].condition.icon}`);
        timeImg.setAttribute('alt', 'current weather icon');

        let temprature = document.createElement('h2')
        temprature.className = 'temp';
        temprature.id = `hourlyTemprature${i}`;
        temprature.innerText = `${currenDateForecast.hour[i].temp_c}°c`;

        let dayTime = document.createElement('span')
        dayTime.className = 'time';

        i >= 12 ? dayTime.innerText = i + ' Pm ' : dayTime.innerText = i + ' Am ';

        timecard.appendChild(timeImg);
        timecard.appendChild(temprature);
        timecard.appendChild(dayTime);
        card.appendChild(timecard);
        dayCard.appendChild(card);
        cards.appendChild(dayCard);
    }

    let buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'button-wrapper';

    let leftBtn = document.createElement('button');
    leftBtn.id = 'left-button';
    leftBtn.innerText = '<';

    let rightBtn = document.createElement('button');
    rightBtn.id = 'right-button';
    rightBtn.innerText = '>';

    buttonWrapper.appendChild(leftBtn);
    buttonWrapper.appendChild(rightBtn);
    cards.appendChild(buttonWrapper);
    dayTimeCard.appendChild(cards);
    output.appendChild(dayTimeCard);
    carsoule();
}

// this function dispaly all current weather condition 
export const mainWeatherReportArea = async (data) => {
    let moreWeatherDetails = await data;
    let currentDetail = moreWeatherDetails.current;
    let output = document.getElementById('main');

    let dayTimeCard = output.querySelector("#dayTimeCardWraper");

    let mainDisplayArea = document.createElement('div');
    mainDisplayArea.className = "mainDisplayArea";

    let detial_heading = document.createElement('div')
    detial_heading.className = "detail_head";
    detial_heading.id = "d_head";

    let weatherHeading = document.createElement('h2');
    weatherHeading.className = 'weatherHeading';
    weatherHeading.innerText = "Weather Details";

    let datetime = document.createElement('p');
    datetime.id = 'datetime';

    detial_heading.appendChild(weatherHeading);
    detial_heading.appendChild(datetime);
    mainDisplayArea.appendChild(detial_heading);

    let weatherDetails = document.createElement('div');
    weatherDetails.className = "waetherDetails";

    let details = document.createElement('div')
    details.className = "deatils";

    let temp = document.createElement('p');
    let temp_span = document.createElement("span")
    temp_span.id = 'feelslike';
    temp.innerText = "Feelslike  "
    temp_span.innerText = ` ${currentDetail.feelslike_c}°c`;
    temp.appendChild(temp_span);

    let visibility = document.createElement('p');
    let visibility_span = document.createElement('span')
    visibility_span.id = 'visibility';
    visibility.innerText = "Visibility  "
    visibility_span.innerText = `${currentDetail.vis_km}km`;
    visibility.appendChild(visibility_span);

    let humidity = document.createElement('p');
    let humidity_span = document.createElement("span")
    humidity_span.id = 'humidity';
    humidity.innerText = "Humidity  "
    humidity_span.innerText = `${currentDetail.humidity}%`;
    humidity.appendChild(humidity_span);

    let uv = document.createElement('p');
    let uv_span = document.createElement("span")
    uv_span.id = 'uv';
    uv.innerText = "UV "
    uv_span.innerText = ` ${currentDetail.uv}km`;
    uv.appendChild(uv_span);

    let pressure = document.createElement('p');
    let pressure_span = document.createElement("span")
    pressure_span.id = 'pressure'
    pressure.innerText = "Pressure  "
    pressure_span.innerText = `${currentDetail.pressure_mb}mb`;
    pressure.appendChild(pressure_span);

    let wind = document.createElement('p');
    let wind_span = document.createElement("span")
    wind_span.id = 'wind';
    wind.innerText = " wind  ";
    wind_span.innerText = `${currentDetail.wind_kph}kph`;
    wind.appendChild(wind_span);

    details.appendChild(temp);
    details.appendChild(visibility);
    details.appendChild(humidity);
    details.appendChild(uv);
    details.appendChild(pressure);
    details.appendChild(wind);
    weatherDetails.appendChild(details)
    mainDisplayArea.appendChild(weatherDetails)
    dayTimeCard.appendChild(mainDisplayArea)
    output.appendChild(dayTimeCard)
}

// add live date and time function
export function dateAndTime() {

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let session = 'PM';

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if (hours < 12) {
        session = 'AM';
    }
    let deatilHead = document.getElementById('d_head');
    let dateTime = deatilHead.querySelector('#datetime');
    dateTime.innerText = `${time.toLocaleDateString()} / ${hours}:${minutes}:${seconds} ${session}`;

    var t = setTimeout(() => {
        dateAndTime();
    }, 1000);

}
// next week function renders next 6 day weather report
export const nextWeekWeather = async (data) => {

    let daysForecast = await data;
    let dayData = daysForecast.forecast.forecastday;
    let nextWeek = document.getElementById('weekCards');
    nextWeek.innerHTML = '<h2>Next Two Days Weather Report </h2>';

    let nextWeekCardHoldwer = document.createElement('div')
    nextWeekCardHoldwer.className = "NextWeekCardHoldwer";

    for (let i = 1; i < daysForecast.forecast.forecastday.length; i++) {
        let nextWeekTimecard = document.createElement('div');
        nextWeekTimecard.className = 'NextWeekTimecard';

        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let nextDate = dayData[i].date;
        let dateSplit = nextDate.split('-')
        nextDate = dateSplit.join(',')
        const d = new Date(nextDate);
        let day = weekday[d.getDay()];
        let nextWeekDay = document.createElement('h2')
        nextWeekDay.id = `nextWeekDay${i}`;
        nextWeekDay.innerText = `${day}`;

        let nextWeekdate = document.createElement('p')
        nextWeekdate.id = `NextWeekdate${i}`;
        nextWeekdate.innerText = `${dayData[i].date}`

        let nextWeekImg = document.createElement('img');
        nextWeekImg.id = `nextWeekImg${i}`;
        nextWeekImg.setAttribute('src', `${dayData[i].day.condition.icon}`);
        nextWeekImg.setAttribute('alt', 'current weather icon');

        let nextWeekText = document.createElement('p')
        nextWeekText.id = `NextWeekText${i}`;
        nextWeekText.innerText = `${dayData[i].day.condition.text}`

        let nextWeekTemprature = document.createElement('h2')
        nextWeekTemprature.id = `NextWeekTemprature${i}`;
        nextWeekTemprature.innerText = `Max Temp ${dayData[i].day.maxtemp_c}°C | Min Temp ${dayData[i].day.mintemp_c}°C`;

        nextWeekTimecard.appendChild(nextWeekDay);
        nextWeekTimecard.appendChild(nextWeekdate);
        nextWeekTimecard.appendChild(nextWeekImg);
        nextWeekTimecard.appendChild(nextWeekText);
        nextWeekTimecard.appendChild(nextWeekTemprature);
        nextWeekCardHoldwer.appendChild(nextWeekTimecard);
    }
    nextWeek.appendChild(nextWeekCardHoldwer);
}