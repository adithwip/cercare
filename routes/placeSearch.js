const express = require('express');
const router = express.Router();
const axios = require('axios')

require('dotenv').config();

const apiKey = process.env.API_KEY 

const googleMapsClient = require('@google/maps').createClient({
  key: apiKey
})

router.get('/search', (req, res) => {
  let places = req.query.place
  googleMapsClient.places(
    {
      query:places, 
      radius: 10000
    }, (err, data1) => {
      if(!err){
        res.send(data1)
        }else{
          res.send(err)
        }
    })
})






module.exports = router;
