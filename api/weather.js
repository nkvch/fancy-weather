const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = process.env.OPEN_WEATHER_ACCESS_KEY;

const router = express.Router();

router.route('/:city')
.get(async (req, res) => {
    try {
        const { degrees } = req.query;
        const response = await fetch(`${BASE_URL}?q=${req.params.city}&appid=${apiKey}${ degrees === 'C' ? '&units=metric' : '' }`);
        const data = await response.json();
        res.json(data);
    } catch (e) {
        console.error(e);
    }
    
});

module.exports = router;