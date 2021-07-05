import getLocation from './modules/location';
import applyBackground from './modules/background';
import getWeather from './modules/weather';
import './styles/main.scss';

const app = document.createElement('div');
app.className = 'container-fluid app';
document.body.appendChild(app);

let location;
let weather;


getLocation()
.then((data) => {
    location = data;
})
.then(async () => {
    applyBackground(app, location.city);
    weather = await getWeather(location.city);
})
.then(() => {
    console.log(location);
    console.log(weather);
});





