const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const musicRotues = require('./music-routes');

router.use('/music', musicRotues);
router.use('/users', userRoutes);

module.exports = router;
