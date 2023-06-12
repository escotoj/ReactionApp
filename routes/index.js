// MAINROUTES INDEX

const router = require('express').Router();
const apiRoutes = require('./api');

// router.use('/', apiRoutes);
router.use('/api', apiRoutes);


router.use((req, res) => res.send('wrong ROUTE'));


module.exports = router;