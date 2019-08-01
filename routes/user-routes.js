const express    = require('express');
const router     = express.Router();
const bcrypt     = require('bcryptjs');
const passport   = require('passport');
const User       = require('../models/User');


/*Starting all user authentication  */
//Start signup post route
/*Using res.status() with error code and 
sending message to be displayed on the frontend 
side.*/
router.post('/signup', (req, res, next) => {
    const theUsername = req.body.username;
    const thePassword = req.body.password;
    // const theEmail = req.body.email; //Not signing up with email yet
    console.log("*******",req.body.username);
    console.log("------",req.body.password);
  
    if (!theUsername || !thePassword) {
      res.status(400).json({ message: 'Provide username and password' }); //Personalize message!!
      return;
    }

    // if(password.length < 7){
    //     res.status(400).json({ message: 'Please make your password at least 8 characters long for security purposes.' });
    //     return;
    // } //I will comment this out when I am ready to deploy
  
    User.findOne({ username: theUsername }, (err, foundUser) => {

        if(err){
            res.status(500).json({message: "Username check went bad."}); //Personalize message!!
            return;
        }

        if (foundUser) {
            res.status(400).json({ message: 'Username taken. Choose another one.' }); //Personalize message!!
            return;
        }
        //Why aren't these up higher?
        const salt     = bcrypt.genSaltSync(12);
        const hashedPassword = bcrypt.hashSync(thePassword, salt);
  
        const theNewUser = new User({
            username: theUsername,
            password: hashedPassword
        });
  
        theNewUser.save(err => {
            if (err) {
                res.status(400).json({ message: 'Saving user to database went wrong.' });
                return;
            }
            
            // Automatically logingin user after sign up
            // here .login() is a predefined passport method
            req.login(theNewUser, (err) => {
                console.log(err);
                if (err) {
                    // res.status(500).json({ message: 'Login after signup went bad.' });
                    res.status(500).json({ message: err });
                    return;
                }
            
                // Sending the user's information to the frontend
                // We can also use: res.status(200).json(req.user);
                res.status(200).json(theNewUser);
            });
        });
    });
});
//End of signup post route





//Start login post route
router.post('/login', (req, res, next) => {
  // Shit this is also theUser will this break my app.
  passport.authenticate('local', (err, theUser, failureDetails) => {
      if (err) {
          res.status(500).json({ message: 'Something went wrong authenticating user' });  //Personalize message!!
          return;
      }
  
      if (!theUser) {
          // "failureDetails" contains the error messages
          // from our logic in "LocalStrategy" { message: '...' }.
          res.status(401).json(failureDetails);
          return;
      }

      // save user in session
      req.login(theUser, (err) => {
          if (err) {
              res.status(500).json({ message: 'Session save went bad.' });  //Personalize message!!
              return;
          }

          // We are now logged in (that's why we can also send req.user)
          console.log('Yo******', req.user, 'Sick******');
          res.status(200).json(theUser);
      });
  })(req, res, next);
});
//End of login post route





//Start logout post route
router.post('/logout', (req, res, next) => {
  // req.logout() is defined by passport
  req.logout();
  res.status(200).json({ message: 'Log out success!' });
});
//End of logout post route





//Start loggedin get route
/*this route will be our helper in checking do we have 
user in the session and who the user is.
If we are not logged in and we try to access to 
/loggedin we will get this response 
:{“message”: “Unauthorized”}.*/
router.get('/loggedin', (req, res, next) => {
  // req.isAuthenticated() is defined by passport
  // if (req.isAuthenticated()) {
  //     res.status(200).json(req.user);
  //     return;
  // }
  if (req.user) {
    let newObject = {};
    newObject.username = req.user.username;
    newObject._id = req.user._id;

    res.status(200).json(newObject);
    return;
  }
  res.status(403).json({ message: 'Unauthorized' });
});
//End of loggedin get route








module.exports = router;