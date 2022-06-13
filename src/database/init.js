const DataBase = require("./config")

const initDataBase = {
    async init(){
        const db = await DataBase()

        await db.exec(`CREATE TABLE rooms (id INTEGER PRIMARY KEY, password TEXT)`);

        await db.exec(`CREATE TABLE questions (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, read INT, room INT)`);
        
        await db.close()
    }
}

initDataBase.init()

// ° Retomar a aula 5 a partir de 32:00.