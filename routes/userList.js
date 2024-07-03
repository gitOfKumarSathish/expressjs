const express = require('express');
const path = require('path');
const rootDir = require('./../utils/basepath');

const router = express.Router();


router.get('/user-list', (req, res, next) => {
    console.log('in User List page', __dirname);
    // return res.send('<h1>From UserList Page 2</h1>');
    // return res.sendFile(path.join(__dirname, '..', 'views', 'userList.html'));
    return res.sendFile(path.join(rootDir, 'views', 'userList.html'));
});

module.exports = router;