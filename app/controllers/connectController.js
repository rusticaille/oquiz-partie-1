require('dotenv').config();

const {Answer, Level, Question, Quiz, Tag, User} = require('../models');

const connectController = {

    signupPage: (req, res) => {
        res.render('signup');
    },


    loginPage: (req, res) => {
        res.render('login');
    },

    userLogin: (req, res) => {
        const emailFromForm = req.body.email;
        const passwordFromForm = req.body.password;
        console.log('emailFromForm :', emailFromForm);
        console.log('passwordFromForm :', passwordFromForm);
        User.findOne({ where: {email : emailFromForm}}).then( (user) => { 
          const emailUserFromDatabase = user.dataValues.email;
          const passwordUserFromDatabase = user.dataValues.password;
          console.log('emailUserFromDatabase :', emailUserFromDatabase);
          console.log('passwordUserFromDatabase :', passwordUserFromDatabase);
          if(emailFromForm === emailUserFromDatabase && passwordFromForm === passwordUserFromDatabase){
              console.log('Vous êtes connecté');
            res.render('login');
          } else if(emailFromForm === emailUserFromDatabase && passwordFromForm !== passwordUserFromDatabase){
              console.log('Vous avez oublié votre mot de passe ?');
              res.render('login');
          }      
        }).catch((err) => {
            if(err) {
                console.log('identifiants incorrects');
                console.log(err);
                const errorLogin = err;
                res.render('login', {
                    error : errorLogin
                });
            }
          });
    }
    
}


module.exports = connectController;