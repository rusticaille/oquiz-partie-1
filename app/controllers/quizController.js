require('dotenv').config();

const {Answer, Level, Question, Quiz, Tag, User} = require('../models');

const quizController = {
    quizPage:(req, res) => {
        const quizId = req.params.id;
        Quiz.findByPk(quizId,{
            include: [
              'author',
              'tags',
              {
                association :'questions',
                include: ['answers', 'level']
              },
              
        
            ]
        }).then( (quiz) => {
            //console.log(quiz);
            const quizFromDatabase = quiz;
            //for( const question of quiz.questions){
            const questionsFromDatabase = quiz.questions;
            const answersFromDatabase = quiz.answers;
                //console.log(question.answers);
                 res.render('quiz', {
                    quiz: quizFromDatabase,
                    questions : questionsFromDatabase,
                    answers : answersFromDatabase
                 });
            //}
          });
        
    }
}

module.exports = quizController;