const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController')

router.get('/', inventoryController.inventory);
router.get('/new-item',inventoryController.addItemForm);
router.post('/create-item', inventoryController.addItem);
router.get('/:id', inventoryController.viewItem);
router.get('/:id/edit', inventoryController.editItem);
router.put('/:id', inventoryController.updateItem);
router.delete('/:id', inventoryController.deleteItem);

module.exports = router;