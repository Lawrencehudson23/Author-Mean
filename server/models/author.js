const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
    },
    age: {
      type: Number,
      required: [true, "Please enter an age."],
      validate: [(age) => age > 9, "Please enter an age greater than 9."],
    },
  },
  { timestamps: true }
);
mongoose.model("Author", AuthorSchema);
