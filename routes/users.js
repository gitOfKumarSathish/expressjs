const express = require('express');
const path = require('path');

const rootDir = require('./../utils/basepath');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('middleware 1', __dirname, rootDir);
    // return res.send("<h1>Hello Express I'm from base page</h1>");
    // return res.sendFile(path.join(__dirname, '..', 'views', 'basePage.html'));

    res.sendFile(path.join(rootDir, 'views', 'basePage.html'));

    return res.redirect('user-form');
});

module.exports = router;