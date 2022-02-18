const express = require('express');
const { nanoid } = require('nanoid');
const Link = require('../models/Link');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const linkData = {
            originalUrl: req.body.originalUrl,
            shortUrl: nanoid(10)
        };

        const link = new Link(linkData);

        await link.save();

        return res.send(link);
    } catch (e) {
        next(e);
    }
});

module.exports = router;