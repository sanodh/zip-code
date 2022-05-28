const express = require("express");
const cors=require("cors");
const news = require('./routes/news');
const profile = require('./routes/profile');
const match = require('./routes/match');
//const leaderBoard = require('./routes/leaderBoard');

const app = express();

const corsOptions ={
  origin:'*', 
  credentials:true,            
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(news);
app.use(profile);
app.use(match);
//app.use(leaderBoard);

app.listen(8000, (req,res)=>{
    console.info(`App running on port 8000`)
  });