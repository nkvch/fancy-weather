const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const location = require('./api/location');
const images = require('./api/images');

dotenv.config();

const port = 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.enable('trust proxy');

app.use('/location', location);
app.use('/images', images);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));
    app.get('*', async (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    });
}

app.listen(process.env.PORT || port, () => {
    console.log(`listening on port ${process.env.PORT || port}`);
});