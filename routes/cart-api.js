const express = require('express');
const router  = express.Router();
const itemQueries = require('../db/queries/cart');

router.post('/', (req, res,) => {
  console.log("there", req.body)
  console.log('current test', req.body)
  const myIDNumber = req.body.click
  console.log(myIDNumber, 'checking')

  itemQueries.addToOrder(myIDNumber)
  
    .then(items => {
     console.log(items, "this is my items")
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
