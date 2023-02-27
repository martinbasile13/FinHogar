const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const config = require('./src/config/config.js')
const ingresos = require('./src/routes/routes.js')


//middleware
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.listen(config.app.port, ()=> {
    console.log('Servidor escuchando en el Puerto:', config.app.port )
})
app.get('/', (req, res) => res.status(200).send({

    message: '⬆️ Server is up ⬆️ ',
  
  }));
//routes
app.use('/api', ingresos)