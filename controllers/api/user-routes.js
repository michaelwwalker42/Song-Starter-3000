const router = require('express').Router();
const { User } = require('../../models');


//GET /api/users
router.get('/', (req, res) =>{
    // access our User model and run .findAll() method
    User.findAll({
        attributes: { exclude: ['password' ] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create users from signup page POST api/users
router.post('/', (req, res) => {
    // expects{ username: 'lernantino', email: 'email', password}
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
.then(dbUserData => {
    req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
        console.log('you are now signed up')
        res.json(dbUserData);
    })
})
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({ message: 'Incorrect Password or Email!' })
            return;
        }
        //Verify user
        const validPassword = dbUserData.checkPassword(req.body.password)
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect Password or Email!' });
            return;
        }

        req.session.save(() => {
            // declare session variables
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
    });
})

// logout  route
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
        res.json({message: 'logged out'})
      }
      else {
        res.status(404).end();
      }
});

module.exports = router;
