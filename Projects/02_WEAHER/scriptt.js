/*
document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBTn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    const API_KEY = "7932275bcef6616dbe5bd71be47494f9"; // env variables
    getWeatherBTn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;
        // it may throw an error
        // server/database is always in another continent
        try {
            const weatherData = await fetchWeatherData(city);
        } catch (error) {
            showError()
        }
    })
    async function fetchWeatherData(city) {
        // gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);  
        if (!response.ok) {
            throw new Error("City Not found");
        }
        const data = await response.json();
        return data;
    }
    function displayWeatherData(data) {
        // display the data
        console.log(data);
        const {name, main, weather} = data;
        cityName.textContent = name;
        // unlock the display
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
    function showError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
})
*/
/* 
document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBTn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    const API_KEY = "7932275bcef6616dbe5bd71be47494f9"; // env variables
    getWeatherBTn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    })
    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);  
        if (!response.ok) {
            throw new Error("City Not found");
        }
        const data = await response.json();
        return data;
    }
    function displayWeatherData(data) {
        console.log(data);
        const {name, main, weather} = data;
        cityName.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp}`;
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
    function showError() {
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
})
*/
document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById("city-input");
    const getWeatherBTn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityName = document.getElementById("city-name");
    const temperature = document.getElementById("temperature");
    const description = document.getElementById("description");
    const errorMessage = document.getElementById("error-message");
    const API_KEY = "7932275bcef6616dbe5bd71be47494f9"; // env variables
    getWeatherBTn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return;
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    })
    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        console.log(typeof response);
        console.log("RESPONSE", response);  
        if (!response.ok) {
            throw new Error("City Not found");
        }
        const data = await response.json();
        return data;
    }
    function displayWeatherData(data) {
        console.log(data);
        const {name, main, weather} = data;
        cityName.textContent = name;
        temperature.textContent = `Temperature: ${main.temp}`;
        description.textContent = `Weather: ${weather[0].description}`;
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
    function showError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden');
    }
})
