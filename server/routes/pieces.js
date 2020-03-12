const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  db.Piece.find(req.query).populate('museum')
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
  let newPiece = {
    name: req.body.pName,
    image: req.body.pImage,
    museum: req.body.museum,
    creator: {
      name: req.body.cName,
      image: req.body.cImage,
      birthYear: req.body.birthyear,
      deathYear: req.body.deathyear
    }
  }
  Object.keys(newPiece).forEach((key) => (newPiece[key] == '') && delete newPiece[key]);
  Object.keys(newPiece.creator).forEach((key) => (newPiece.creator[key] == '') && delete newPiece.creator[key]);

  db.Piece.create(newPiece)
  .then(piece => {
    res.redirect(`/pieces/${piece._id}`);
  }).catch(err=>res.send({ message: 'Error encountered when creating piece', err }));
})

module.exports = router;