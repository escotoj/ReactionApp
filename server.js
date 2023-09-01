require('dotenv').config()
const connectDB = require('./config/connections')
const routes = require('./routes')
const thoughtRoutes = require('./routes/api/thoughtRoutes');
const userRoutes = require('./routes/api/userRoutes')

const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/thoughts', thoughtRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
      console.log('Listening on http://localhost:3001/');
    });
  });
  