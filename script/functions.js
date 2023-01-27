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