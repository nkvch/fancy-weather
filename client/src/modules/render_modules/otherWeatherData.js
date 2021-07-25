import { textListTemplate } from "./template";

export default (weatherFormat) => {
     
    const column = document.getElementById('weather-data-column');
    column.innerText = '';
    const weatherData = [
        weatherFormat.feelsLike,
        weatherFormat.pressure,
        weatherFormat.hummidity,
        weatherFormat.wind
    ];
    const element = textListTemplate('weather-data', 'weather-data-item', 'p', 'weather-data-text', weatherData);
    column.appendChild(element);
}
