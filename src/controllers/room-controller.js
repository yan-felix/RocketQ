const DataBase = require("../database/config")

module.exports = {
    async create(req, res){
        const db = await DataBase()

        const password = req.body.Create_Room_Pass_Input

        let roomID = ""

        for(let i = 0; i < 6; i++){
            roomID += Math.floor(Math.random() * 10).toString()
        }

        const roomsExistIDs = await db.all(`SELECT id FROM rooms`)

        let exitstID = roomsExistIDs.some(roomsExistID => roomsExistID === roomID)

        if(! exitstID){
            await db.run(`INSERT INTO rooms (
                id,
                password
            ) VALUES (
                ${parseInt(roomID)},
                ${password}
            )`)
        }else{
            for(let i = 0; i < 6; i++){
                roomID += Math.floor(Math.random() * 10).toString()
            }

            await db.run(`INSERT INTO rooms (
                id,
                password
            ) VALUES (
                ${parseInt(roomID)},
                ${password}
            )`)
        }

        await db.close()

        res.redirect(`/room/${roomID}`)
    },

    async loadQuestions(req, res){
        const db = await DataBase()
        const roomID =  req.params.room_id
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomID} AND read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomID} AND read = 1`)
        let noQuestions

        if(questions.length == 0){
            if(questionsRead.length == 0){
                noQuestions = true
            }
        }

        res.render("room", {roomID: roomID, questions: questions, questionsRead: questionsRead, noQuestions: noQuestions})

        
    },

    getIn(req, res){
        const roomID = req.body.Room_Cod_Input

        res.redirect(`/room/${roomID}`)
    }
}

// ° Retomar a aula 5 a partir de 32:00.