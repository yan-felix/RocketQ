const { redirect } = require('express/lib/response')
const DataBase = require('../database/config')

module.exports = {
    async index(req, res){
        const db = await DataBase()
        const roomID = req.params.room_id
        const questionNumber = req.params.question_number
        const actionType = req.params.action_type
        const password = req.body.Administrator_Password
        
        const verifyRoomID = await db.get(`SELECT * FROM rooms WHERE id = ${roomID}`)
        if(verifyRoomID.password == password){
            if(actionType == "delete"){
                await db.run(`DELETE FROM questions WHERE id = ${questionNumber}`)
            }else if(actionType == "check"){
                await db.run(`UPDATE questions SET read = 1 WHERE id = ${questionNumber}`)
            }

            res.redirect(`/room/${roomID}`)
        }else{
            res.render('password-incorrect', {roomID: roomID})
        }

        
    },

    async create(req, res){
        const db = await DataBase()
        const question = req.body.New_Question
        const roomID = req.params.room_id

        await db.run(`INSERT INTO questions(title, read, room) VALUES("${question}", 0, ${roomID})`)

        res.redirect(`/room/${roomID}`)

    }
}

// ° Retomar a aula 5 a partir de 57:00.