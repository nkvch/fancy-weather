import { textTemplate } from "./template"

export default (weatherFormat) => {
    const column = document.getElementById('temperature-column');
    column.innerText = '';
    const degElement = textTemplate('div', 'weather-deg-container', 'h1', 'weather-deg-text', weatherFormat.currTemperature);
    const iconElement = document.createElement('img');
    iconElement.src = weatherFormat.iconLink;
    iconElement.className = 'weather-icon';
    degElement.appendChild(iconElement);
    column.appendChild(degElement);
}