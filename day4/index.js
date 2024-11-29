// imports
const express = require('express');
const app = express();
const port = 3000;

// console.dir(app);

app.get('/', (request, response) =>{
  res.send('Hello World!');
  console.log(req);
})

app.get('/r/:subreddit', (req,res) => {
  // console.log(req.params); 
  // res.send('this is a subreddit');
const { subreddit } = req.params;
console.log(`Searching subreddit: ${subreddit}`);
res.send(`You are searching ${subreddit} subreddit!`);
})

app.post('/r/:subreddit', (req,res) => {
  // console.log(req.params); 
  // res.send('this is a subreddit');
const { subreddit } = req.params;
console.log(`Searching subreddit: ${subreddit}`);
res.send(`You are searching ${subreddit} subreddit!`);
})

app.get('/r/:subred/:postId', (req,res) => {
const { subred, postId } = req.params;
console.log(`Searching subreddit: ${subred} and post ID: ${postId}`);
res.send(`Searching subreddit: ${subred} and post ID: ${postId} practice daw ng nodemon`);
})

app.get('/cats', (req,res) => {
  res.send('Meow');
})
app.get('/dogs', (req,res) => {
  res.send('arf');
})
app.post('/dogs', (req,res) => {
  res.send("arf post");
})

app.get('/', (req,res) => {
  res.send("Home Page");
})

// wildcard 
app.get('*', (req,res) => {
  res.send("404 not found!");
})

// app.use((req,res) => {
//   console.log('we got a new request');
//   // res.send("Here's our response!");
//   res.send("<h1>Hello guys!</h1>");
// });




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});