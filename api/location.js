const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

const token = process.env.IPINFO_ACCESS_KEY;

router.route('/')
.get(async (req, res) => {
    try {
        const ip = req.ip;
        const response = await fetch(`https://ipinfo.io/${ip}?token=${token}`);
        const json = await response.json();
        res.json(json);
    } catch (e) {
        console.error(e);
        res.json(e);
    }
})

module.exports = router;