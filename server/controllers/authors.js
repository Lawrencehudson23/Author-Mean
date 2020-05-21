const mongoose = require("mongoose");
const Author = mongoose.model("Author");

module.exports = {
  index(_req, res) {
    Author.find().then((authors) => res.json({ authors }));
  },
  create(req, res) {
    Author.create(req.body)
      .then((author) => res.json({ author }))
      .catch((err) => res.json({ errors: err.errors }));
  },
  getById(req, res) {
    Author.findById(req.params.id)
      .then((author) => res.json({ author }))
      .catch((err) => res.json({ errors: err.errors }));
  },
  delete(req, res) {
    Author.findByIdAndDelete(req.params.id)
      .then(() => res.json({ status: "success" }))
      .catch((err) => res.json({ errors: err.errors }));
  },
  update(req, res) {
    Author.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        age: req.body.age,
      },
      {
        new: true,
        runValidators: true,
      }
    )
      .then((author) => res.json({ author }))
      .catch((err) => res.json({ errors: err.errors }));
  },
};
