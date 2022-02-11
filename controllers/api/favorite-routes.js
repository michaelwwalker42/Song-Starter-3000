const router = require('express').Router();
const { Progression } = require('../../models');
const withAuth = require('../../utils/auth');

// get favorite progressions for user with user id
router.get('/', (req, res) => {
    Progression.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'progression_name', 'chords']
    })
    .then(dbProgresssionData => {
        res.json(dbProgresssionData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;