const express = require('express');
const router = express.Router();
const db = require('../models/index');

router.get('/', (req, res) => {
  db.Museum.find()
  .then(museums => {
    res.send(museums);
  }).catch(err=>res.send({ message: 'Error in getting all museums', err }));
});

router.get('/:id', (req, res) => {
  db.Museum.findById(req.params.id)
  .then(museum=>res.send(museum))
  .catch(err=>res.send({ message: 'Error in getting one museum', err }));
})

router.post('/', (req, res) => {
  db.Museum.find({ name: req.body.name })
  .then(museum => {
    if (museum) {
      res.send({ message: 'Museum already exists', err });
    } else {
      db.Museum.create(req.body)
      .then(museum => {
        res.redirect(`/museums/${museum._id}`);
      }).catch(err=>res.send({ message: 'Error creating museum', err }));
    }
  }).catch(err=>res.send({ message: 'Error encountered when creating museum', err }));
})

module.exports = router;