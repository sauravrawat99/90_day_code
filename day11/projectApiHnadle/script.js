document.addEventListener("DOMContentLoaded", () => {
  console.log("Weather App Ready ✅");

  // 🌍 Select Elements
  const cityInput = document.getElementById("cityInput");
  const getWeatherBtn = document.getElementById("getWeatherBtn");

  const weatherInfo = document.getElementById("weatherInfo");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const feelsLike = document.getElementById("feelsLike");
  const description = document.getElementById("mainWeather");

  const tempMin = document.getElementById("tempMin");
  const tempMax = document.getElementById("tempMax");
  const windSpeed = document.getElementById("windSpeed");
  const windDeg = document.getElementById("windDeg");
  const visibility = document.getElementById("visibility");
  const clouds = document.getElementById("clouds");
  const sunriseEl = document.getElementById("sunrise");
  const sunsetEl = document.getElementById("sunset");
  const weatherIcon = document.getElementById("weatherIcon");

  const errorMassage = document.getElementById("errorMassage");

  // 🌐 API KEY
  const API_KEY = "a3ac3e6dd820e089f91510f87a1ebadc";

  // 🔁 Load last searched city from localStorage
  const savedCity = localStorage.getItem("lastCity");
  if (savedCity) {
    fetchWeather(savedCity);
  }

  // ⌨️ Enter Key Support
  cityInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  });

  // 🖱️ Button Click
  getWeatherBtn.addEventListener("click", () => {
    handleSearch();
  });

  // 🔎 Common Search Handler
  function handleSearch() {
    const city = cityInput.value.trim();

    if (city === "") {
      showError("Please enter city name");
      return;
    }

    fetchWeather(city);
    cityInput.value = "";
  }

  // 🌦️ Fetch Weather (async / await)
  async function fetchWeather(city) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      // ✅ Save last searched city
      localStorage.setItem("lastCity", city);

      showWeather(data);
    } catch (error) {
      showError("City not found, please try again.");
    }
  }

  // ✅ Show Weather Data
  function showWeather(data) {
    errorMassage.classList.add("hidden");
    weatherInfo.classList.remove("hidden");

    cityName.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerText = `${data.main.temp}°C`;
    feelsLike.innerText = `Feels like: ${data.main.feels_like}°C`;

    description.innerText = data.weather[0].description;

    tempMin.innerText = data.main.temp_min;
    tempMax.innerText = data.main.temp_max;

    windSpeed.innerText = data.wind.speed;
    windDeg.innerText = data.wind.deg;

    visibility.innerText = data.visibility;
    clouds.innerText = data.clouds.all;

    sunriseEl.innerText = convertTime(data.sys.sunrise, data.timezone);
    sunsetEl.innerText = convertTime(data.sys.sunset, data.timezone);

    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].main;
  }

  // ❌ Show Error
  function showError(message) {
    weatherInfo.classList.add("hidden");
    errorMassage.classList.remove("hidden");
    errorMassage.innerText = message;
  }

  // ⏰ Unix Time → Local Time
  function convertTime(unixTime, timezone) {
    const date = new Date((unixTime + timezone) * 1000);
    return date.toUTCString().slice(17, 22); // HH:MM
  }
});
