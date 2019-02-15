const express = require("express");
const mongoose = require("mongoose");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);

const cors = require("cors");

//mLab.com
mongoose.connect(
  "mongodb://goweek:goweek123@ds223605.mlab.com:23605/goweek-backend",
  {
    useNewUrlParser: true
  }
);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen(3000, () => {
  console.log("Server Started on Port 3000");
});
