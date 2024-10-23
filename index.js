require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const carCompanyRoutes = require("./routes/carcompany");

mongoose.set("strictQuery", true);
const connString = process.env.DATABASE_URL;

mongoose.connect(connString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database connected");
});

const app = express();
app.use(express.json());
app.use("/api", carCompanyRoutes);

app.listen(8000, () => {
  console.log(`Server started at ${3000}`);
});
