const router = require('express').Router();
const { Progression } = require('../../models');
const withAuth = require('../../utils/auth');

// get favorite progressions for user with session.user_id
router.get('/', withAuth, (req, res) => {
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

//  TODO post from save.js file new favorite
router.post('/', withAuth, (req, res) => {
    Progression.create({
        progression_name: req.body.title,
        chords: req.body.newProgression,
        user_id: req.session.user_id
    })
    .then(data => {
        res.json(data);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;