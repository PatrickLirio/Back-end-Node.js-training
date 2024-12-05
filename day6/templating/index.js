// import
const express = require('express')
const app = express();
const redditData = require('./data.json');
const port = 4000;


const path = require ('path');
// console.log(path.join(__dirname, '/views'));
// console.log(__dirname);

app.set('view engine', 'ejs'); /* we won't need to import the ejs if we do this*/

app.set('views',path.join(__dirname, '/views')); /* this will help you to run this file even you are outside this folder */

app.use(express.static(path.join(__dirname, 'public')));/*It will execute whenever request. type of middlewear*/

// homepage
app.get('/', (req,res) => {
  // res.send('Hello, World!');
  res.render('home'); /*to render the ejs in views folder*/
})

app.get('/cats', (req,res)=> {
  // pretend this array of data comes from database
  const cats = ["Muning", "Chi-chi", "Garfield", "Tom", "Felix"];
  res.render('cats', {cats: cats}); /*to render the ejs in views folder */
})

app.get('/r/:subreddit', (req, res)=>{
  const {subreddit} = req.params;
  const data = redditData[subreddit];
  if(data) {
    res.render('subreddit', {...data})
  } else {
    res.render('notfound');
  }
  res.render('subreddit', {...data});
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