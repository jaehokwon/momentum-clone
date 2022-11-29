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
            console.log('weather', weather, 'city', city);
            weather.querySelector("img").src = `icons/${data.weather[0].icon}.png`;
            weather.querySelector("p").innerText = `${Math.round(data.main.temp * 10) / 10}°C`;
            city.innerText = data.name;
        });
}
function onGeoError(){
    // alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
