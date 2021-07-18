import { textTemplate } from "./template";

export default (cityName) => {
    const column = document.getElementById('cityNameColumn');
    column.innerText = '';
    const cityNameElement = textTemplate('div', 'city-name-container', 'h4', 'city-name', cityName);
    column.appendChild(cityNameElement);
}