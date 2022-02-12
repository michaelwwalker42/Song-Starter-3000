const router = require('express').Router();
const favoriteRoutes = require('./favorite-routes');
const userRoutes = require('./user-routes.js');

router.use('/favorite', favoriteRoutes);
router.use('/users', userRoutes);

module.exports = router;
