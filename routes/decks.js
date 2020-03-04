const router = require('express').Router();
const decksCtrl = require('../controllers/decks');

// GET requests
router.get('/', decksCtrl.index);
router.get('/new', decksCtrl.new);
router.get('/:id', decksCtrl.show);
// POST requests
router.post('/', decksCtrl.create);
router.post('/:id/cards', decksCtrl.newCard);
// PUT requests
router.put('/:id', decksCtrl.update);
// DELETE requests
router.delete('/:id', decksCtrl.delete);

module.exports = router;