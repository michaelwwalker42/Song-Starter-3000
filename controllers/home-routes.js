const router = require('express').Router();

//get main page
router.get('/', (req, res) => {
    res.render('homepage', {
        loggedIn: false
    })
})

module.exports = router;
