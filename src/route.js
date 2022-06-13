const express = require('express')
const questionController = require('./controllers/question-controller')
const roomController = require('./controllers/room-controller')

const routes = express.Router()

routes.get('/', (req, res) => {
     res.render("index.ejs", {page: 'get-in-room'})
});

routes.get('/index', (req, res) => {
     res.render("index.ejs", {page: 'get-in-room'})
});

routes.get('/create-pass', (req, res) => {
    res.render('index.ejs', {page: 'create-pass'})
});

routes.post('/create-room', roomController.create);

routes.get('/room/:room_id', roomController.loadQuestions);

routes.post('/get_in_room', roomController.getIn)

routes.post('/question/create_question/:room_id', questionController.create)

routes.post('/question/:room_id/:question_number/:action_type', questionController.index);

module.exports = routes

// ° Retomar a aula 5 a partir de 32:00.