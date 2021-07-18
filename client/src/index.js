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

const app = document.createElement('div');
app.className = 'container-fluid app';
document.body.appendChild(app);

const appData = {
    langInternal: localStorage.getItem('lang') || 'en',
    set lang(newLang) {
        if (newLang !== this.langInternal) {
            this.langInternal = newLang;
            localStorage.setItem('lang', newLang);
            renderSwitchLang(appData);
            prepareText(this.location, newLang)
            .then((newTextTemplate) => {
                this.textTemplate = newTextTemplate;
                renderLocationData(this.locationFormat);
                renderCityName(this.locationFormat.city);
                renderWeatherData(this.weatherFormat);
            });
        }
    },
    get lang() {
        return this.langInternal;
    },


    degreesInternal: localStorage.getItem('degrees') || 'C',
    set degrees(newVal) {
        if (newVal !== this.degreesInternal) {
            console.log(newVal);
            this.degreesInternal = newVal;
            localStorage.setItem('degrees', newVal);
            renderSwitchDegrees(appData);
            getWeather(this.location, this.degrees)
            .then(newWeather => {
                console.log(newWeather);
                this.weather = newWeather;
            });
        }
    },
    get degrees() {
        return this.degreesInternal;
    },

    locationInternal: JSON.parse(localStorage.getItem('location')) || null,
    set location(newLoc) {
        
        this.locationInternal = newLoc;
        localStorage.setItem('location', JSON.stringify(newLoc));
        initMap(this);
        Promise.all([getWeather(newLoc, this.degrees), prepareText(newLoc, this.lang)])
        .then(data => {
            const weather = data[0];
            const text = data[1];
            this.textTemplate = text;
            this.weather = weather;
            //renderTemperature(this.weatherFormat);
            //renderWeatherData(this.weatherFormat);
            renderLocationData(this.locationFormat);
            renderCityName(this.locationFormat.city);
        });

        getBackground(newLoc)
        .then(background => {
            this.backgroundImage = background;
            applyBackground(app, this);
        });
        
        // Promise.all([getWeather(newLoc, this.degrees), getBackground(newLoc), prepareText(newLoc, this.lang)])
        // .then(results => {
        //     const weather = results[0];
        //     const background = results[1];
        //     const text = results[2];
        //     this.weather = weather;
        //     this.backgroundImage = background;
        //     this.textTemplate = text;
        // });
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
        // this.textTemplateListener(newText);
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
    renderRefreshWeather();
    renderSwitchLang(appData);
    renderSwitchDegrees(appData);
    appData.location = data;
});


