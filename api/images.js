const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const BASE_URL = 'https://api.unsplash.com';
const router = express.Router();

router.route('/:query')
.get( async (req, res) => {

    const rawResponse = await fetch(`${BASE_URL}/search/photos?query=${req.params.query}`, {
        headers: {
            Authorization: 'Client-ID '+ process.env.UNSPLASH_ACCESS_KEY
        }
    });
    const jsonResponse = await rawResponse.json();
    res.json(jsonResponse);
});

module.exports = router;