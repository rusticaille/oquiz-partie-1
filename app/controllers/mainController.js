require('dotenv').config();

const {Answer, Level, Question, Quiz, Tag, User} = require('../models');

const mainController = {
    homePage:(request, response) => {
        Quiz.findAll({
            include: 'author'
          }).then(quizzes => {
              if(!quizzes){
                throw Error('pas de quizzes'); 
              } else {
                console.log(quizzes);
                const quizzesFromDatabase = quizzes;
                response.render('homepage', {
                    allQuizzes : quizzes
                });
              }
              
          });
    }, 

    error404: (request, response) => {
      response.render('error404');
    }

}


module.exports = mainController;