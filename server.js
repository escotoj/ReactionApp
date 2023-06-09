require('dotenv').config()
const db = require('./config/connections')
const routes = require('./routes')


const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


app.listen(PORT, () => {
    console.log('listeing.... on http://localhost:3001/')
});