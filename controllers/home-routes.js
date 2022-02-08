const router = require('express').Router();
const withAuth = require('../utils/auth');

//get main page
router.get('/', (req, res) => {
    //redirect to profile page if user is already signed in
    if(req.session.user_id) {
        res.redirect('profile')
    } else {
        res.render('homepage', {
            loggedIn: true
        })    
    }
});

// get login page
router.get('/login', (req, res) => {
    res.render('login', {
        loggedIn: false
    })
});

//get signup page
router.get('/signup', (req, res) => {
    res.render('signup', {
        loggedIn: false
    })
})

// go to profile ** with auth needed
router.get('/profile', (req, res) => {
    res.render('profile', {
        loggedIn: true
    })
})

//get favorites
router.get('/favorites/id', withAuth, (req, res) => {
    // get all favorites where user_id is equal to req.params.id, this will also be session.user_id
})

module.exports = router;
