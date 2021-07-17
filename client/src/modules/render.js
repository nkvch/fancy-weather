import renderTemperature from './render_modules/temperature';
import renderWeatherData from './render_modules/otherWeatherData';
import renderLocationData from './render_modules/location';
import renderSwitchDegrees from './render_modules/switchDegrees';
import renderSwitchLang from './render_modules/switchLang';
import renderMap from './render_modules/map';
import renderCitySearch from './render_modules/citySearch';
import { initAutocomplete } from './initAutocomplete';
import initMap from './initMap';

const render = (app, appData) => {

    // const weatherFormat = appData.weatherFormat;
    // const locationFormat = appData.locationFormat;

    app.innerHTML = ``;

    //app.style.backgroundImage = `url('${appData.backgroundImage}')`;

    const container = document.createElement('div');
    container.className = 'container data-holder';

    ////

    // const switchLang = renderSwitchLang(appData);
    // const switchCelsiusButtons = renderSwitchDegrees(appData);

    const cityInput = renderCitySearch();

    ////

    const inputsRow = document.createElement('div');
    inputsRow.className = 'row';

    const switchesCol = document.createElement('div');
    switchesCol.className = 'col-sm-4 col-md-5 col-lg-6 col-xl-8 switches-column';

    const switchDegreesHolder = document.createElement('div');
    switchDegreesHolder.id = 'switch-degrees-holder';

    const switchLangHolder = document.createElement('div');
    switchLangHolder.id = 'switch-lang-holder';    

    switchesCol.appendChild(switchDegreesHolder);
    switchesCol.appendChild(switchLangHolder);

    const citySearchCol = document.createElement('div');
    citySearchCol.className = 'col-sm-8 col-md-7 col-lg-6 col-xl-4 city-search-column';

    citySearchCol.appendChild(cityInput);

    inputsRow.appendChild(switchesCol);
    inputsRow.appendChild(citySearchCol);
    
    const mainRow = document.createElement('div');
    mainRow.className = 'row';

    const colDeg = document.createElement('div');
    colDeg.id = 'temperature-column';
    colDeg.className = 'col-sm-4';

    ////

    //const tempElement = renderTemperature(weatherFormat);

    ////

    //colDeg.appendChild(tempElement);
    
    const colWeatherData = document.createElement('div');
    colWeatherData.id = 'weather-data-column';
    colWeatherData.className = 'col-sm-4';

    ////

    //const weatherData = renderWeatherData(weatherFormat);

    ////

    //colWeatherData.appendChild(weatherData);

    const colLoc = document.createElement('div');
    colLoc.id = 'location-column';
    colLoc.className = 'col-sm-4';

    ////

    //const locationData = renderLocationData(locationFormat);

    ////

    //colLoc.appendChild(locationData);
    

    mainRow.appendChild(colDeg);
    mainRow.appendChild(colWeatherData);
    mainRow.appendChild(colLoc);

    container.appendChild(inputsRow);
    container.appendChild(mainRow);

    const map = renderMap();
    container.appendChild(map);

    app.appendChild(container);
    //initMap(appData);
    initAutocomplete(appData, cityInput);
}

export default render;