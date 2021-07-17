const express = require('express');
const axios = require('axios');

const router = express.Router();

router.route('/')
.post(async (req, res) => {
    const { to, from } = req.query;
    const { text } = req.body;
    console.log(to);
    console.log(from);
    console.log(text);
    const options = {
        method: 'GET',
        url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
        params: {
            text, 
            to, 
            from
        },
        headers: {
          'x-rapidapi-key': process.env.X_RAPID_KEY,
          'x-rapidapi-host': 'nlp-translation.p.rapidapi.com'
        }
    };
    try {
        const NLPresponse = await axios.request(options);
        res.status(200).json({
            translated: NLPresponse.data.translated_text[to]
        });
    } catch (e) {
        console.error(e);
    }
});

module.exports = router;