// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

// IMPORTS FROM OTHER FILES
const userRouter = require("./routes/api");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://Troy-MA:qDMGzA6WBAFU76c@biometric.forqq84.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(userRouter);

//ip config
var os = require('os');

var networkInterfaces = os.networkInterfaces();

console.log(networkInterfaces);
// Connections

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
