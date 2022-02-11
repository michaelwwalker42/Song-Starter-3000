const router = require('express').Router();
const favoriteRoutes = require('./favorite-routes');
const userRoutes = require('./user-routes.js');
const musicRotues = require('./music-routes');

router.use('/favorite', favoriteRoutes);
router.use('/music', musicRotues);
router.use('/users', userRoutes);

module.exports = router;
