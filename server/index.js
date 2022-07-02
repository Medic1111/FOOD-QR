const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();
const path = require("path");
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use(express.static(path.resolve(__dirname, "../client/build")));

// DB CONNECTION
mongoose.connect(process.env.DB_URI, (err) =>
  err ? console.log(err) : console.log("DB Connected")
);

const resSchema = new mongoose.Schema({
  resName: String,
  resAddress: String,
  resNumber: String,
});

const Restaurant = new mongoose.model("Restaurant", resSchema);

// POST NEW REST

app.post("/api/new", async (req, res) => {
  const { resName, resAddress, resNumber } = req.body;

  const newRes = new Restaurant({
    resName,
    resAddress,
    resNumber,
  });

  await newRes.save((err, doc) => {
    err
      ? res.status(500).json({ message: "Server error has occured" })
      : res.status(200).json({ message: doc._id });
  });
});

// GET SPECIFIC REST

app.get("/api/restaurants/:_id", (req, res) => {
  let id = req.params._id;

  Restaurant.find({ _id: id }, (err, doc) => {
    err ? console.log(err) : res.status(200).json(doc[0]);
  });
});

// UNHANDLED ROUTES
app.get("/*", (req, res) => {
  res.sendFile(
    express.static(path.resolve(__dirname, "../client/build", "index.html"))
  );
});

// SERVER

app.listen(process.env.PORT || 3002, () => console.log("Server Spinning"));
