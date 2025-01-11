navigator.geolocation.getCurrentPosition(
  (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const API_KEY = "d98f55e87dd9ef0eb1164f14fcab7cfa";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
      .then((response) => response.json())
      .then((data) => {
        const currentWeather = data.weather[0].description;
        const currentTemp = data.main.temp;
        const currentCity = data.name;

        console.log(currentWeather);
        console.log(currentTemp);
        console.log(currentCity);

        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = `${currentWeather} / ${currentTemp}°C`;
        city.innerText = currentCity;
      });
  },
  () => {
    alert("Please enable location services to use this feature");
  }
);
