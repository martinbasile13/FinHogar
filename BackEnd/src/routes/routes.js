const express = require('express')
const router = express.Router();

const rest = require('../res/rest.js')
const db = require('../db/mysql.js')

router.get('/', async (req, res) => {
    try{
      const items = await db.list()
      rest.sucess(req, res, items, 200)
    }catch(err){
      rest.error(req, res, err, 500)
    }
  })

module.exports = router;