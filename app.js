const express = require('express')
const app = express()
const port = 3000
const Route = require("./routes/route");
const ConnectDB = require("./db/connect");
require("dotenv").config();
app.use("/index", Route);

// DB接続
const start = async () => {
  try {
    ConnectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
  catch(err){
    console.log(err);
  }
};

start();