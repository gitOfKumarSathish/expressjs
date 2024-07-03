const express = require('express');
const path = require('path');
const rootDir = require('./../utils/basepath');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// app.use(bodyParser.urlencoded({ extended: false }));


router.get('/user-form', (req, res, next) => {
    console.log('in User List page', __dirname);
    // return res.send('<h1>From UserList Page 2</h1>');
    // return res.sendFile(path.join(__dirname, '..', 'views', 'userList.html'));
    return res.sendFile(path.join(rootDir, 'views', 'form.html'));
});

router.post('/user-form', (req, res, next) => {
    console.log('in User List page', __dirname);
    // return res.send('<h1>From UserList Page 2</h1>');
    // return res.sendFile(path.join(__dirname, '..', 'views', 'userList.html'));
    // return res.sendFile(path.join(rootDir, 'views', 'form.html'));
    res.sendFile(path.join(rootDir, 'views', 'form.html'));
    console.log('some content', req.body);
    return res.redirect('/');
});


module.exports = router;