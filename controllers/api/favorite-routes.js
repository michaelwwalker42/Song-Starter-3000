const router = require('express').Router();
const { Progression } = require('../../models');
const withAuth = require('../../utils/auth');

// get favorite progressions with user_id, add witAuth
router.get('/', (req, res) => {
    Progression.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'progression_name', 'chords']
    })
    .then(dbProgresssionData => {
        
        const chords = dbProgresssionData.map(chord => chord.get({ plain: true }));
        res.render('favorites', { 
          chords,
          loggedIn: req.session.loggedIn
         });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
})

module.exports = router;