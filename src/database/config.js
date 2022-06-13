const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

module.exports = () => 
    open({
        filename: './src/database/rocketq.sqlite',
        driver: sqlite3.Database,
    })

// ° Retomar a aula 5 a partir de 32:00.
