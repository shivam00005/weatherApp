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
            // console.log(response)
            return response
        } else if (retrive.status === 400) {
            const err = await retrive.json();
            // console.log(err)
            return err
        }
    } else {
        const retrive = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city} ${region} ${country}&days=3`, options)
        if (retrive.status === 200) {
            const response = await retrive.json();
            // console.log(response)
            return response
        } else if (retrive.status === 400) {
            const err = await retrive.json();
            // console.log(err)
            return err
        }
    }
}

//user search 
let search = document.getElementById('search');
search.addEventListener('click', () => {
    let city = document.getElementById('city').value;
    let region = document.getElementById('state').value;
    let country = document.getElementById('country').value;
    console.log(apiSetUp(city, country, region))

});

// current waether function 
const curentWeather = async (data) => {

    let currentReport = await data;
    let report = currentReport.current;
    let reportLocation = currentReport.location;
    console.log(reportLocation)
    let output = document.getElementById('main');

    let currentweather = document.createElement('div');
    currentweather.className = 'currentWeather';

    let heading = document.createElement('h2');
    heading.className = "heading_2";

    let description = document.createElement('div');
    description.className = 'weatherDescription';

    let img = document.createElement('img');
    img.setAttribute('src', `${report.condition.icon}`);
    img.setAttribute('alt', 'current weather icon');

    let text = document.createElement('p');
    text.innerText = `${report.condition.text}`;

    let temprature = document.createElement('h2');
    temprature.className = "temp";
    temprature.innerText = `${report.temp_c}°`;

    let currenDate = document.createElement('p');
    currenDate.className = "currenDate";
    currenDate.innerText = `Last Update : ${report.last_updated}`

    let location = document.createElement('p');
    let icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';

    icon.innerText = 'pin_drop';

    let address = document.createElement('span');
    address.className = 'location';
    address.innerText = `${reportLocation.name}`;

    let countryRegion = document.createElement('span');
    countryRegion.className = 'location';
    countryRegion.innerText = `${reportLocation.region}, ${reportLocation.country}`;

    currentweather.appendChild(heading);
    description.appendChild(img);
    description.appendChild(text);
    description.appendChild(temprature);
    description.appendChild(currenDate);
    location.appendChild(icon);
    location.appendChild(address);
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
export function hourlyCards() {
    let output = document.getElementById("main");
    let dayTimeCard = document.createElement('div');
    dayTimeCard.className = "dayTimeCard";
    dayTimeCard.id = "dayTimeCardWraper";
    dayTimeCard.innerHTML = `<h2>Regina hourly Weather Report</h2>`;

    let Cards = document.createElement('div');
    Cards.className = 'wrapper';

    let dayCard = document.createElement('ol');
    dayCard.className = "dayCard carousel";
    dayCard.id = "hourTime"
    dayCard.setAttribute('data-target', 'carousel');

    for (let i = 1; i < 25; i++) {
        let card = document.createElement('li');
        card.className = 'card';
        card.setAttribute('data-target', 'card');

        let timecard = document.createElement('div');
        timecard.className = 'timecard';

        let img = document.createElement('img');
        img.setAttribute('src', 'images/tempImg.png');
        img.setAttribute('alt', 'current weather icon');

        let temprature = document.createElement('h2')
        temprature.className = 'temp';
        temprature.innerText = '7°';

        let dayTime = document.createElement('span')
        dayTime.className = 'time';

        i >= 12 ? dayTime.innerText = i + ' Pm ' : dayTime.innerText = i + ' Am ';

        timecard.appendChild(img);
        timecard.appendChild(temprature);
        timecard.appendChild(dayTime);
        card.appendChild(timecard);
        dayCard.appendChild(card);
        Cards.appendChild(dayCard);
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
    Cards.appendChild(buttonWrapper);
    dayTimeCard.appendChild(Cards);
    output.appendChild(dayTimeCard);
    carsoule();
}

// this function dispaly all current weather condition 
export const mainWeatherReportArea = () => {
    let output = document.getElementById('main');

    let dayTimeCard = document.getElementById("dayTimeCardWraper");

    let mainDisplayArea = document.createElement('div');
    mainDisplayArea.className = "mainDisplayArea";

    let detial_heading = document.createElement('div')
    detial_heading.className = "detail_head";
    detial_heading.id = "d_head";

    let weatherHeading = document.createElement('p');
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

    // can be done with loop
    let temp = document.createElement('p');
    let temp_span = document.createElement("span")
    temp_span.innerText = "Feels like -"
    temp.appendChild(temp_span);
    temp.innerText += ' -17 °';

    let Visibility = document.createElement('p');
    let Visibility_span = document.createElement('span')
    Visibility_span.innerText = "Visibility -"
    Visibility.appendChild(Visibility_span);
    Visibility.innerText += ' 16 Km';

    let Humidity = document.createElement('p');
    let Humidity_span = document.createElement("span")
    Humidity_span.innerText = "Humidity -"
    Humidity.appendChild(Humidity_span);
    Humidity.innerText += ' 77% ';

    let U_V = document.createElement('p');
    let U_V_span = document.createElement("span")
    U_V_span.innerText = "UV -"
    U_V.appendChild(U_V_span);
    U_V.innerText += ' 16 Km';

    let Pressure = document.createElement('p');
    let Pressure_span = document.createElement("span")
    Pressure_span.innerText = "Air Pressure -"
    Pressure.appendChild(Pressure_span);
    Pressure.innerText += ' 1020 hPa';

    let WNW = document.createElement('p');
    let WNW_span = document.createElement("span")
    WNW_span.innerText = "WNW -";
    WNW.appendChild(WNW_span);
    WNW.innerText += ' 11 Km';

    details.appendChild(temp);
    details.appendChild(Visibility);
    details.appendChild(Humidity);
    details.appendChild(U_V);
    details.appendChild(Pressure);
    details.appendChild(WNW);
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
export const nextWeekWeather = () => {
    let nextWeek = document.getElementById('weekCards');
    nextWeek.innerHTML = '<h2>Next Week Weather Report </h2>';

    let NextWeekCardHoldwer = document.createElement('div')
    NextWeekCardHoldwer.className = "NextWeekCardHoldwer";

    for (let i = 1; i < 8; i++) {
        let timecard = document.createElement('div');
        timecard.className = 'timecard';

        let day = document.createElement('h2')
        day.className = 'day';
        day.innerText = 'monday';

        let img = document.createElement('img');
        img.setAttribute('src', 'images/tempImg.png');
        img.setAttribute('alt', 'current weather icon');

        let temprature = document.createElement('h2')
        temprature.className = 'temp';
        temprature.innerText = '7°';

        timecard.appendChild(day);
        timecard.appendChild(img);
        timecard.appendChild(temprature);
        NextWeekCardHoldwer.appendChild(timecard);
    }
    nextWeek.appendChild(NextWeekCardHoldwer);
}