const express = require('express');
const baseUrlRoutes = require('./routes/users');
const userListRoutes = require('./routes/userList');
const notFoundRoutes = require('./routes/notfound');
const userFormRoutes = require('./routes/userform');
const bodyParser = require('body-parser');

// const mongoConnect = require('./utils/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/', (req, res, next) => {
//     console.log("Always i'll come");
//     next();
// });

app.use(userFormRoutes);
app.use(userListRoutes);
app.use(baseUrlRoutes);
app.use(notFoundRoutes);

// mongoConnect((client) => {
//     console.log({ client });
// });
app.listen(3000);