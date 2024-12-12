const mongoose = require('mongoose');
const Inventory = require('../models/inventory');

mongoose.connect('mongodb://127.0.0.1:27017/inventory-db')
    .then(() => {
      console.log('Connected to MongoDB...');
    })
.catch(err => {
  console.log("error");
  console.log(err);
})

const seedDb = async() =>{
  const item = new Inventory({
    name: 'banana',
    category: 'fruit',
    quantity: 10,
    price: 15,
    description: "yellow"
  })
  await item.save();
}

seedDb().then(() =>{
  mongoose.connection.close();
})

