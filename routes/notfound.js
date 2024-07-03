const express = require('express');

const router = express.Router();


router.use('*', (req, res, next) => {
    console.log('notFoundRoutes Page');
    return res.status(404).send('<h1>notFound</h1>');
});

module.exports = router;