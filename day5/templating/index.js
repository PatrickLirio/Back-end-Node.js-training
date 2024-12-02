// import
const express = require('express')
const app = express();
const port = 4000;

const path = require ('path');
// console.log(path.join(__dirname, '/views'));
// console.log(__dirname);

app.set('view engine', 'ejs'); /* we won't need to import the ejs if we do this*/

app.set('views',path.join(__dirname, '/views')); /* this will help you to run this file even you are outside this folder */

// homepage
app.get('/', (req,res) => {
  // res.send('Hello, World!');
  res.render('home'); /*to render the ejs in views folder*/
})

// random numbers
app.get('/rand', (req, res) =>{
  const randomNum = Math.floor(Math.random() * 10) + 1;
  // console.log(randomNum);
  // res.render('random');
  res.render('random', {rand: randomNum});
})


app.get('/r/:subreddit', (req, res) =>{
  const {subreddit} = req.params;
  res.render('subreddit', {sub: subreddit});
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})