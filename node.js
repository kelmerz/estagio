const sequelize = require('sequelize')
const express = require('express')

const Sequelize = sequelize.Sequelize 

const connection = new Sequelize(
    'testing',
    'root',
    'ANSKk08aPEDbFjDO', 
    {
        dialect: "mysql",
        host: 'localhost',
        port: 3307
    }
);

const Firm = connection.define('firm', {
  name: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT
  }
})

connection.sync({force: true}) //sync to your database!


const app = express()
app.use(express.json());


app.get('/', (req, res) => {
    const resp = {}

    try {
        Firm.findAll()
        .then(e => {
            res.json(e)
        })
        
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }
})

app.get('/:id', (req, res) => {
    const resp = {}

    try {
        Firm.findAll({
            where:{
                id:req.params.id
            }
        })
        .then(e => {
            res.json(e)
        })
        
    } catch (error) {
        console.log(error)
        resp.status = 'fail'

        res.json(resp)
    }
})

app.post('/', (req, res) => {
    const resp = {}

    try {
        Firm.build(req.body).save()
        resp.status = "ok"
    } catch (error) {
        resp.status = 'fail'
    }

    res.json(resp)
})


app.put('/:id', (req, res) => {
    const resp = {}

    try {
        Firm.findOne({
            where:{
                id:req.params.id
            }
        })
        .then(e => {
            e.update(req.body)
            
            res.json(e)
        })
        
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }
})

app.delete('/:id', (req, res) => {
    let resp = {}

    try {
        Campus.destroy({
            where:{
                id:req.params.id
            }
        })
  
        resp = {
            status:'ok'
        }
    } catch (error) {
        resp.status = 'fail'

        res.json(resp)
    }

    res.json(resp)
})

const port = 3000

app.listen(port, () => {
  console.log(`On port ${port}`)
})
