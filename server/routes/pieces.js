const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  db.Piece.find()
  .then(pieces => {
    res.send(pieces);
  }).catch(err=>res.send({ message: 'Error in getting all pieces', err }));
});

router.get('/:id', (req, res) => {
  db.Piece.findById(req.params.id)
  .then(piece=>res.send(piece))
  .catch(err=>res.send({ message: 'Error in getting one piece', err }));
})

router.post('/', (req, res) => {
  db.Piece.find({ image: req.body.image })
  .then(piece => {
    if (piece) {
      res.send({ message: 'Piece already exists', err });
    } else {
      db.Piece.create(req.body)
      .then(piece => {
        res.redirect(`/pieces/${piece._id}`);
      }).catch(err=>res.send({ message: 'Error creating piece', err }));
    }
  }).catch(err=>res.send({ message: 'Error encountered when creating piece', err }));
})

module.exports = router;