const express = require('express');
const fetch = require('node-fetch');

const BASE_URL = 'https://ipinfo.io';

const router = express.Router();

router.route('/')
.get(async (req, res) => {
    let ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    console.log(ip);
    res.json({status: 'wewe'});
})

const getLocation = async () => {
    try {
        const res = await fetch(`${BASE_URL}/json?token=${process.env.IPINFO_ACCESS_KEY}`);
        const json = await res.json();
        return json;
    } catch (e) {
        console.error(e);
    }
}

module.exports = router;