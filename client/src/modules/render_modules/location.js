import { textListTemplate } from "./template";
import { textTemplate } from "./template";

export default (locationFormat) => {
    const column = document.getElementById('location-column');
    column.innerText = '';
    const locData = document.createElement('div');
    locData.className = 'location-data-container';
    const cityContainer = textTemplate('div', 'city-container', 'p', 'city-name', `${locationFormat.city}, ${locationFormat.country}`);
    const latlonList = textListTemplate('lat-lon-list', 'lat-lon-item', 'p', 'lat-lon-text', [
        locationFormat.latitude,
        locationFormat.longitude
    ]);
    locData.appendChild(cityContainer);
    locData.appendChild(latlonList);
    column.appendChild(locData);
}
