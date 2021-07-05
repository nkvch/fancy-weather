const express = require('express');
const IPinfoWrapper = require('node-ipinfo');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

const token = process.env.IPINFO_ACCESS_KEY;
const ipinfoWrapper = new IPinfoWrapper(token);

router.route('/')
.get(async (req, res) => {
    try {
        const ip = req.ip.match(/(\d|\.)*$/)[0];
        console.log(ip);
        console.log('tger');
        const response = await ipinfoWrapper.lookupIp(ip);
        res.json(response);
    } catch (e) {
        console.error(e);
        res.json(e);
    }
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