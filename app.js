require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();


//error handkers 


//packages
app.use(express.json());


//routes 



const port = process.env.PORT || 3000;


const start = async () => {
    try {
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();