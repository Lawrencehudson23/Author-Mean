const authorsCtl = require("../controllers/authors");

module.exports = (app) => {
  app.get("/api/authors/:id", authorsCtl.getById);
  app.get("/api/authors", authorsCtl.index);
  app.post("/api/authors", authorsCtl.create);
  app.delete("/api/authors/:id", authorsCtl.delete);
  app.put("/api/authors/:id", authorsCtl.update);
};
