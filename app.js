const express = require("express");
const myApp = express();

myApp.get("/", (request, response) => {
  response.send("Express JS");
});

myApp.listen(3000);
module.exports = myApp;
