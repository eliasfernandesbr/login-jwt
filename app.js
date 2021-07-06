require("dotenv").config();

const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");
// const URL = 'mongodb://localhost:127.0.0.1/users_login'

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("🔸🔸Banco de dados MongoDB Conectado");
    }
  }
);

app.use("/user", express.json(), userRouter);

app.listen(process.env.PORT, () => {
  console.log("🔊 SERVER RUNNING");
});
