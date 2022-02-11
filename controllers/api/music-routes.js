const router = require('express').Router();
const { User, Scale } = require('../../models'); 

//to-do route to find chords by key name will be sent key
router.get('/', (req, res) => {
    Scale.findAll({
        where: {
            key_name: req.body.key_name
        }
        .then()
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    });
})

module.exports = router;
