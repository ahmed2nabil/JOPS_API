require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();


//error handers 
const notFoundMiddleware  =  require("./middlewares/not-found");
const errorHandlerMiddleware  =  require("./middlewares/");

//packages
app.use(express.json());


//routes 


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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