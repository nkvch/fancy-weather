import axios from 'axios';
import getLocation from './modules/location';
import getBackground from './modules/background';
import getWeather from './modules/weather';
import { formatLocationData, formatWeatherData } from './modules/formatData';
import render from './modules/render';
import renderLocationData from './modules/render_modules/location';
import renderWeatherData from './modules/render_modules/otherWeatherData';
import renderTemperature from './modules/render_modules/temperature';
import initMap from './modules/initMap';
import renderSwitchLang from './modules/render_modules/switchLang';
import renderSwitchDegrees from './modules/render_modules/switchDegrees';
import renderRefreshWeather from './modules/render_modules/refreshWeather';
import applyBackground from './modules/render_modules/applyBackground';
import renderCityName from './modules/render_modules/cityName';
import './styles/main.scss';
import { prepareText } from './modules/textTemplates';
import { onLoading, offLoading } from './modules/render_modules/loading';

const app = document.createElement('div');
app.id = 'app';
app.className = 'container-fluid app';
document.body.appendChild(app);

const appData = {
    langInternal: localStorage.getItem('lang') || 'en',
    set lang(newLang) {
        if (newLang !== this.langInternal) {
            onLoading();
            this.langInternal = newLang;
            localStorage.setItem('lang', newLang);
            renderSwitchLang(appData);
            prepareText(this.location, newLang)
            .then((newTextTemplate) => {
                this.textTemplate = newTextTemplate;
                renderLocationData(this.locationFormat);
                renderCityName(this.locationFormat.city);
                renderWeatherData(this.weatherFormat);
                offLoading();
            });
        }
    },
    get lang() {
        return this.langInternal;
    },


    degreesInternal: localStorage.getItem('degrees') || 'C',
    set degrees(newVal) {
        if (newVal !== this.degreesInternal) {
             
            this.degreesInternal = newVal;
            localStorage.setItem('degrees', newVal);
            renderSwitchDegrees(appData);
            getWeather(this.location, this.degrees)
            .then(newWeather => {
                 
                this.weather = newWeather;
            });
        }
    },
    get degrees() {
        return this.degreesInternal;
    },

    locationInternal: 
        localStorage.getItem('location') 
        && localStorage.getItem('location') !== 'undefined' 
        ? JSON.parse(localStorage.getItem('location'))
        : null,
    set location(newLoc) {
        onLoading();
        this.locationInternal = newLoc;
        localStorage.setItem('location', JSON.stringify(newLoc));
        initMap(this);
        Promise.all([getWeather(newLoc, this.degrees), prepareText(newLoc, this.lang)])
        .then(data => {
            const weather = data[0];
            const text = data[1];
            this.textTemplate = text;
            this.weather = weather;
            getBackground(newLoc, weather)
            .then(background => {
                this.backgroundImage = background;
                applyBackground(this);
                offLoading();
            });
            renderLocationData(this.locationFormat);
            renderCityName(this.locationFormat.city);
        });
    },

    get location() {
        return this.locationInternal;
    },

    weatherInternal: null,
    set weather(newWeather) {
        this.weatherInternal = newWeather;
        renderTemperature(this.weatherFormat);
        renderWeatherData(this.weatherFormat);
    },
    get weather() {
        return this.weatherInternal;
    },

    backgroundImageInternal: localStorage.getItem('backgroundSrc') || null,
    set backgroundImage(newSrc) {
        if (newSrc !== this.backgroundImageInternal) {
            this.backgroundImageInternal = newSrc;
            localStorage.setItem('backgroundSrc', newSrc);
        }
        
    },
    get backgroundImage() {
        return this.backgroundImageInternal;
    },

    textTemplateInternal: JSON.parse(localStorage.getItem('textTemplate')) || null,
    set textTemplate(newText) {
        this.textTemplateInternal = newText;
        localStorage.setItem('textTemplate', JSON.stringify(newText));
    },
    get textTemplate() {
        return this.textTemplateInternal;
    },

    get locationFormat() {
        return formatLocationData(this.location, this.textTemplate);
    },

    get weatherFormat() {
        return formatWeatherData(this.weather, this.textTemplate);
    }
}



getLocation()
.then((data) => {
    render(app, appData);
    renderRefreshWeather(appData);
    renderSwitchLang(appData);
    renderSwitchDegrees(appData);
    appData.location = data;
});


