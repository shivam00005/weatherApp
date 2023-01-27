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

export function hourlyCards() {

    let output = document.getElementById('mian');

    let dayTimeCard = document.createElement('div');
    dayTimeCard.className = "dayTimeCard";

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

export default curentWeather;