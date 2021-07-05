import './styles/main.scss';

const app = document.createElement('div');
app.className = 'container-fluid app';
document.body.appendChild(app);

let city;
let country;
let loc;
let timezone;

// ImageService.searchWithQuery('warsaw')
// .then(warsaw => {
//     app.style.backgroundImage = `url('${warsaw.results[0].urls.full}')`;
// });

//When in production:
fetch('/location')
//fetch('https://super-fancy-weather.herokuapp.com/location')
.then(async (res) => {
    const data = await res.json();
    city = data.city;
    country = data.country;
    loc = data.loc.split(',');
    timezone = data.timezone;
    console.log(city);
})
.catch((e) => {
    console.error(e);
})




