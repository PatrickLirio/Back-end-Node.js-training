const express = require('express');
const app = express();
const port = 4000;


app.use(express.urlencoded({extended: true}))/*to parse or print the get data*/
app.use(express.json());/*to tell express we want it to be json*/

app.get('/shawarma', (req,res)=>{
  res.send("GET shawarma response");
});

app.post('/shawarma', (req,res)=>{
  const {typeofshawarma,qty} = req.body;
  
  if(qty>1){
    res.send(`Here are your ${qty} ${typeofshawarma}shawarmas. Enjoy!`)
  } else {
    res.send(`Here is your ${qty} ${typeofshawarma}shawarma. Enjoy!`);
  }
  // res.send("POST shawarma response");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})