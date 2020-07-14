const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const user = require("./controllers/user.js");
const reviewController = require("./controllers/review.js");
const cors = require("cors");
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

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
