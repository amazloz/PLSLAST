const app = require("../server").app;

app.get("/user-link", (req, res) => {
  res.json("This is a test route");
});
