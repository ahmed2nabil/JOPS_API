require('dotenv').config();
require('express-async-errors');

//swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

const express = require('express');
const app = express();
//connectDb
const connectDB = require("./db/connect");
const authenticateUser = require("./middlewares/authentiction");
//router
const authRouter = require("./routes/auth");
const jobRouter  = require("./routes/jobs")
//error handers 
const notFoundMiddleware  =  require("./middlewares/not-found");
const errorHandlerMiddleware  =  require("./middlewares/error-handler");

//packages
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req,res) => {
  res.send('<h1>jobs api</h1> <a href="/api-docs">Documentation</a>');
})
app.use("/api-docs", swaggerDocument.serve,swaggerUI.setup(swaggerDocument));
//routes 
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/jobs", authenticateUser,jobRouter);


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