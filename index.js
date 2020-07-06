const express = require('express');
//import mongoose package
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//require env package, now we have access to our .env folder 
//by writing process.env.DB_CONNECTION (the name we gave the variable in the .env folder) to the MongoClient constructor
require('dotenv/config');
const customResponses = require('./middlewares/customResponses');


const app = express();
app.use( customResponses );

app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts');

//middleware
app.use('/posts', postsRoute);

//connect to DB
mongoose.connect( 
  process.env.DB_CONNECTION,
  { useNewUrlParser: true,
    useUnifiedTopology: true },
  () => {
     console.log('connected to DB!');
});

// error handling
app.use ((req, res) => {
  res.notFound({msg: "Not found"});
});
app.use((err, req, res, next) => {
  res.serverError();
});

//start listening to the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port 5000');
})

