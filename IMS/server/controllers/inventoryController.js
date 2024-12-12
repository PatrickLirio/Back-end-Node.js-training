const mongoose = require('mongoose');
const Inventory = require('../../models/inventory');
const inventory = require('../../models/inventory');

mongoose.connect('mongodb://127.0.0.1:27017/inventory-db')
    .then(() => {
      console.log('Connected to MongoDB...');
    })
.catch(err => {
  console.log("error");
  console.log(err);
})

// List of all inventories
exports.inventory = async(req,res) => {
  const inventories = await Inventory.find({});
  // console.log(inventories);
  res.render('index', {inventories});
}

// add item form
exports.addItemForm = (req,res) => {
res.render('new-item');
}

// create item form
exports.addItem = async(req, res) => {
// console.log(req.body);
  const item = new inventory(req.body);
  // console.log(item);
  await item.save();
  res.redirect('/inventory');
}

// view specific item
exports.viewItem = async (req, res) => {
  const item = await inventory.findById(req.params.id);
  // console.log(item);
  res.render('show-item', { inventory: item });

}

// update user form
exports.editItem = async (req, res) => {
  const item = await inventory.findById(req.params.id);
  // console.log(item);
  res.render('edit-item', { inventory: item });
}

// update item

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  const updatedItem = await inventory.findByIdAndUpdate(id, { ...req.body });
  res.redirect(`/inventory/${id}`);
}

// delete item
exports.deleteItem = async (req, res) => {
  const {id} = req.params;
  await inventory. findByIdAndDelete(id);
  res.redirect('/inventory');
}