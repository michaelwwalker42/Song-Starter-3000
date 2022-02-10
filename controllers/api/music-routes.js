const router = require('express').Router();

//todo route to find chords by key name
router.get('/', (req, res) => {
    Scale.findAll({
        where: {
            key_name: req.body.key_name
        }
    })
})

module.exports = router;
