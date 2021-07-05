import './styles/main.scss';
import { ImageService } from './modules/imageService';
import getLocation from './modules/geoService';

const app = document.createElement('div');
app.className = 'container-fluid app';
document.body.appendChild(app);

getLocation()
.then(data => console.log(data));

ImageService.searchWithQuery('warsaw')
.then(warsaw => {
    app.style.backgroundImage = `url('${warsaw.results[0].urls.full}')`;
});




