require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();



//connectDb
const connectDB = require("./db/connect");
//router
const authRouter = require("./routes/auth");
const jobRouter  = require("./routes/jobs")
//error handers 
const notFoundMiddleware  =  require("./middlewares/not-found");
const errorHandlerMiddleware  =  require("./middlewares/error-handler");

//packages
app.use(express.json());


//routes 
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/jobs",jobRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
  start();