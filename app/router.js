const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const connectController = require('./controllers/connectController');

router.get('/', mainController.homePage);
router.get ('/quiz/:id', quizController.quizPage);
router.get('/tags', tagController.tagsPage);
router.get('/tag/:id', tagController.filterQuzzesByTag);
router.get ('/login', connectController.loginPage);
router.post('/login', connectController.userLogin);
router.get('/signup', connectController.signupPage);

router.use(mainController.error404);



module.exports = router;