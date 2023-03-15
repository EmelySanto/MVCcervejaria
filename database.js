const pg = require('pg')
const database = new pg.Client('postgres://tuckmupn:yoFHlTJOi9EVSWTKL8FlwEmSU66t7_mm@babar.db.elephantsql.com/tuckmupn')

database.connect((erro) => {
    if (erro) {
        return console.log('Não foi possível se conectar ao ElephantSQL')
    } else {
        return console.log('Conectado ao ElephantSQL')
    }
})

module.exports = database