const router = require('express').Router();

//get main page
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: false
    })
});

// get login page
router.get('/login', (req, res) => {
    res.render('login', {
        loggedIn: false
    })
});

// go to profile
router.get('/profile', (req, res) => {
    res.render('profile', {
        loggedIn: true
    })
})

module.exports = router;
