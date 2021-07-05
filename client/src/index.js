import './styles/main.scss';
import { ImageService } from './modules/imageService';
import getLocation from './modules/geoService';

const app = document.createElement('div');
app.className = 'container-fluid app';
document.body.appendChild(app);

ImageService.searchWithQuery('warsaw')
.then(warsaw => {
    app.style.backgroundImage = `url('${warsaw.results[0].urls.full}')`;
});

fetch(`http://localhost:8000/location`)
.then(async (res) => {
    const data = await res.json();
    console.log('alala');
    console.log(data);
}




