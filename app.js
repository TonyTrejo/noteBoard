const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const app = express();
// Map global promise - git rid of warning
mongoose.Promise = global.Promise;
// connect to mongoose
mongoose
  .connect(
    "mongodb://localhost/noteboard-dev", {useNewParser: true})
  .then(() => console.log("Mongo DB Connected"))
  .catch(err => console.log(err));

// Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// How middleware works

/*
app.use((req, res, next) => { 
    console.log(Date.now());
    req.name = "Tony Trejo";
    next();
}); 
*/

// Index Route
app.get("/", (req, res) => {
  console.log(req.name);
  res.render("index");
});

// About Route
app.get("/about", (req, res) => {
  res.render("about");
});

const port = 5000;

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
