//Core Module
const path = require("path");

//External Module
const express = require("express");

//LOCAL MODULE
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");

//Local module
const rootDir = require("./utils/pathUtil");

const errorsController = require("./controllers/errors");
const db = require("./utils/databaseUtil");

const {mongoConnect} = require("./utils/databaseUtil");


// Initialize app
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.urlencoded());
//this will od the same thing we did in body parser, so the requet will be logged and its body will be parsed and put into req.body


app.use(express.static(path.join(rootDir, "public")));
app.use(storeRouter);
app.use("/host", hostRouter);
app.use(errorsController.pageNotFound);

const PORT = 3000;

mongoConnect(client=>{
  app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
})
