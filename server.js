const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const user = require("./controllers/user.js");
const reviewController = require("./controllers/review.js");
const cors = require("cors");
const path = require("path");
require("./db/db.js");
/***middleware***/

app.use(cors());

app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

/**Controllers**/
app.use("/", user);
app.use("/review", reviewController);

//need this line to render client side
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
