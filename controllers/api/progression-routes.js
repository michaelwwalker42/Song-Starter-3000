const router = require('express').Router();
const { User, Progression } = require('../../models');

// create route to save progressions
router.post('/', (req, res) => {
    Progression.create({
        progression_name: req.body.progression_name,
        chords: req.body.chords,
        user_id: req.body.user_id
    })
        .then(dbProgressionData => res.json(dbProgressionData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

// create route to get all saved progressions 
router.get('/', (req,res) => {
    Progression.findAll({
        attributes: ['id', 'progression_name', 'chords', 'user_id'],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(dbProgressionData => {
            if (!dbProgressionData){
                res.status(404).json({ message: 'No progressions found, try again!' });
            }
            res.json(dbProgressionData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });

});

module.exports = router;
