const config = require("../config/config");
const mongoose = require("mongoose");

console.log(config);
mongoose.connect(config.MONGODB_URI, (err) => {
  if (!err) {
    console.log("MongoDB connection succeeded.");
  } else {
    console.log(
      "Error in MongoDB connection :" + JSON.stringify(err, undefined, 2)
    );
  }
});

require("./user.model");
