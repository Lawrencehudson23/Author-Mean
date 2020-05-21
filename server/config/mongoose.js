const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/authors", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

require("../models/author");
