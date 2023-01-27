// current waether function 

const curentWeather = () => {
    let output = document.getElementById('main');


    let currentweather = document.createElement('div');
    currentweather.className = 'currentWeather';

    let heading = document.createElement('h2');
    heading.className = "heading_2";

    let description = document.createElement('div');
    description.className = 'weatherDescription';

    let img = document.createElement('img');
    img.setAttribute('src', 'images/tempImg.png');
    img.setAttribute('alt', 'current weather icon');

    let text = document.createElement('p');
    text.innerText = "cloudy";

    let temprature = document.createElement('h2');
    temprature.className = "temp";

    temprature.innerText = '7°';

    let currenDate = document.createElement('h3');
    currenDate.className = "currenDate";

    let location = document.createElement('p');
    let icon = document.createElement('span');
    icon.className = 'material-symbols-outlined';

    icon.innerText = 'pin_drop';


    let address = document.createElement('span');
    address.className = 'location';

    address.innerText = 'regina';

    currentweather.appendChild(heading);
    description.appendChild(img);
    description.appendChild(text);
    description.appendChild(temprature);
    description.appendChild(currenDate);
    location.appendChild(icon);
    location.appendChild(address);
    description.appendChild(location);
    currentweather.appendChild(description);
    output.appendChild(currentweather);


}

export default curentWeather;

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
    dayCard.setAttribute('data-target', 'carousel')




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

        i > 12 ? dayTime.innerText = i + ' Pm ' : dayTime.innerText = i + ' Am ';


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
    leftBtn.setAttribute('id', 'left-button');
    leftBtn.innerText = '<';

    let rightBtn = document.createElement('button');
    rightBtn.setAttribute('id', 'right-button');
    rightBtn.innerText = '>';

    buttonWrapper.appendChild(leftBtn);
    buttonWrapper.appendChild(rightBtn);

    Cards.appendChild(buttonWrapper);

    dayTimeCard.appendChild(Cards);
    output.appendChild(dayTimeCard);



}

// this function dispaly all current weather condition 

export const MainWeatherReportArea = () => {
    let output = document.getElementById('main');

    let dayTimeCard = document.getElementById("dayTimeCardWraper");

    let mainDisplayArea = document.createElement('div');
    mainDisplayArea.className = "mainDisplayArea";

    let detial_heading = document.createElement('div')
    detial_heading.className = "detail_head";


    let weatherHeading = document.createElement('p');
    weatherHeading.className = 'weatherHeading';
    weatherHeading.innerText = "Weather Details";

    let datetime = document.createElement('p');
    datetime.id = 'datetime';
    datetime.innerText = "January 22,2023 / 10:22:55 pm";

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
    let Visibility_span = document.createElement("span")
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
    U_V_span.innerText = "U_V -"
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

