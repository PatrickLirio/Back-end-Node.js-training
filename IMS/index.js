 const express = require('express');
 const methodOverride = require('method-override');
const path = require('path');
const inventRoutes = require('./server/routes/inventoryRoutes')

 const app = express();
 const port = 4000;

 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));

 app.use(express.urlencoded({extended: true}));
 app.use(methodOverride('_method'));

//  execute Routes
app.use('/inventory', inventRoutes);
 

 app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})