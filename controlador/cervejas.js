const database = require("../database");

exports.getCervejas = (req, res) => {
    database.query('SELECT * FROM cervejas').then((resultado) => {
        res.status(200).send({ cervejas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}

exports.cadastrarCerverja = (req, res) => {
    const novaCerveja = req.body
    const query = 'INSERT INTO cervejas(nome, abv,tipo,nacionalidade) VALUES ($1, $2,$3,$4)'
    const values = [novaCerveja.nome, novaCerveja.abv, novaCerveja.tipo, novaCerveja.nacionalidade]

    database.query(query, values).then(() => {
        res.status(200).send({ mensagem: 'Produto inserido!' })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}
exports.getNome = (req, res) => {
    const nomeCerveja = req.params.nome
    const query = 'SELECT * FROM cervejas WHERE lower(nome) = lower($1)'

    database.query(query, [nomeCerveja]).then((resultado) => {
        res.status(200).send({ cervejas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}
exports.getNomeAbr = (req, res) => {
    const values = [req.params.pac]
    const query = `SELECT * FROM cervejas WHERE lower(nome) LIKE lower('%${values}%')`

    database.query(query).then((resultado) => {
        res.status(200).send({ cervejas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}
exports.getNac = (req, res) => {
    const values = [req.params.nac]
    const query = 'SELECT * FROM cervejas WHERE lower(nacionalidade) = lower($1)'

    database.query(query, values).then((resultado) => {
        res.status(200).send({ cervejas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}
exports.getTipo = (req, res) => {
    const values = [req.params.t]
    const query = 'SELECT * FROM cervejas WHERE lower(tipo) = lower($1)'

    database.query(query, values).then((resultado) => {
        res.status(200).send({ cervejas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}
exports.getAbv = (req, res) => {
    database.query('SELECT * FROM cervejas ORDER BY abv DESC').then((resultado) => {
        res.status(200).send({ cervejas: resultado.rows })
    }, (erro) => {
        res.status(500).send({ erro: erro })
    })
}