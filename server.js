// require('dotenv').config()
const connectDB = require('./config/connections')
const routes = require('./routes')
const thoughtRoutes = require('./routes/api/thoughtRoutes');
const userRoutes = require('./routes/api/userRoutes')

const express = require('express');


const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);
// app.use('/api/users', userRoutes);
// app.use('/api/thoughts', thoughtRoutes);
app.use('/users', userRoutes);
app.use('/thoughts', thoughtRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// works
// app.listen(PORT, () => {
//     console.log('listeing.... on http://localhost:3001/')
// });


connectDB().then(() => {
    app.listen(PORT, () => {
      console.log('Listening on http://localhost:3001/');
    });
  });
  


// crashes
// connectDB.once('open', () => {
//     app.listen(PORT, () => {
//     console.log('listeing.... on http://localhost:3001/')
// });
// });