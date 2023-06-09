require('dotenv').config()

const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})


app.listen(PORT, () => {
    console.log('listeing.... on http://localhost:3001/')
});