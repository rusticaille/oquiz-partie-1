require('dotenv').config();

const {Answer, Level, Question, Quiz, Tag, User} = require('../models');

const tagController = {
    
    tagsPage: (request, response) => {
        Tag.findAll().then(tags => {
            const tagsFromDatabase = tags;
            //console.log(tags);
            response.render('tags', {
              tags : tagsFromDatabase
            });
        });
    },

    filterQuzzesByTag: (request, response) => {
        const tagId = request.params.id;
        Tag.findByPk(tagId,{
            include: [ {
                association: 'quizzes',
                include : 'author'
              } ]
          }).then( (tags) => {
            const tagsFromDatabaseById = tags;
            const filteredQuizzesFromDatabase = tags.dataValues.quizzes;
            console.log(tags.dataValues.quizzes);
            response.render('quizzesbytag', {
                tag : tagsFromDatabaseById,
                quizzes : filteredQuizzesFromDatabase
            });
          });
        
    }

    
}


module.exports = tagController;