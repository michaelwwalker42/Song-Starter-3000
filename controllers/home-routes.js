const router = require('express').Router();
const withAuth = require('../utils/auth');

//get main page
router.get('/', (req, res) => {
    //redirect to profile page if user is already signed in
    if(req.session.user_id) {
        res.redirect('progression')
    } else {
        res.render('homepage', {
            loggedIn: true
        })    
    }
});

// get login page
router.get('/login', (req, res) => {
    // make if statment to redirect if logged in
      res.render('login', {
        loggedIn: true
    })
});

//get signup page
router.get('/signup', (req, res) => {
    //need to redirect to homepage if already logged in
    res.render('signup', {
        loggedIn: true
    })
})

// go to progression generator page ** with auth needed
router.get('/progressions', (req, res) => {
    res.render('progressions', {
        loggedIn: true
    });
})

//get favorites ** need to add withAuth
router.get('/favorites', (req, res) => {
    // get all favorites where user_id is equal to req.params.id, this will also be session.user_id
    res.render('favorites', {
        loggedIn: true
    });
})

module.exports = router;
