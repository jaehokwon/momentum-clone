const API_KEY = '21ac130269fc9cc5b482dcb1069c4335';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.main.temp}°C`;
            const img = document.createElement('img');
            img.src = `icons/${data.weather[0].icon}.png`;
            weather.appendChild(img);
        });
}
function onGeoError(){
    // alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
