const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send(<h1>Welcome!!!</h1>)
});
app.get("/about", (req, res) => {
  res.send("ABOUT US")
});

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server is connected on PORT ${PORT}`)});
