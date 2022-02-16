const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Progression } = require('../models');

//get main page
router.get('/', (req, res) => {
    //redirect to progressions page if user is already signed in
    if(req.session.user_id) {
        res.redirect('/progressions')
    } else {
        res.render('homepage', {
            loggedIn: req.session.loggedIn
        })    
    }
});

// get login page
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
      }
      res.render('login');
});

//get signup page
router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

// go to progression generator page ** with auth needed
router.get('/progressions', withAuth, (req, res) => {
    res.render('progressions', {
        loggedIn: req.session.loggedIn
    });
});


//get favorites ** need to add withAuth
router.get('/favorites', withAuth, (req, res) => {
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
});

// go to edit page for single saved progression
router.get('/edit/:id', withAuth, (req, res) => {
    Progression.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'progression_name', 'chords']
    })
    .then(chordData => {
        const chord = chordData.get({ plain: true });
        console.log('-----------------\n' + chord.progression_name);
        res.render('edit-progression', { 
          chord,
          loggedIn: req.session.loggedIn
         });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
