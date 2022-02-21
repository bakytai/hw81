const express = require('express');
const { nanoid } = require('nanoid');
const Link = require('../models/Link');

const router = express.Router();

router.get('/:shortUrl',async (req, res, next) => {
    try {
        const link = await Link.findOne(req.params.shortUrl);

        if (!link) {
            return res.status(404).send({message: 'Not found'});
        }

        res.status(301).redirect(link.originalUrl);
    } catch (e) {
        next(e);
    }
});

router.post('/', async (req, res, next) => {
    try {
        console.log(req.body.originalUrl)
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