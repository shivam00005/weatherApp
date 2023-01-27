// current waether function 

export const cuurentWeather = () => {
    let output = document.getElementById('output');


    let currentweather = document.createElement('div');
    currentweather.className = 'currentWeather';

    let heading = document.createElement('h2');
    heading.className = "heading_2";

    let desciption = document.createElement('div');
    desciption.className = 'weatherDescription';

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
    desciption.appendChild(img);
    desciption.appendChild(text);
    desciption.appendChild(temprature);
    desciption.appendChild(currenDate);
    location.appendChild(icon);
    location.appendChild(address);
    desciption.appendChild(location);
    currentweather.appendChild(desciption);
    output.appendChild(cuurentWeather);


}