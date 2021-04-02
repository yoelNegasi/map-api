const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", function (req, res) {
  const data = [
    {
      Id: 1,
      Name: "Essey",
      Likes: 12,
      Comment: 15,
    },
    {
      Id: 2,
      Name: "Danit",
      Likes: 21,
      Comment: 35,
    },
    {
      Id: 3,
      Name: "Yoel",
      Likes: 23,
      Comment: 45,
    },
    {
      Id: 4,
      Name: "Lulya",
      Likes: 30,
      Comment: 11,
    },
  ];
  res.send(data);
});

app.listen("3001", function () {
  console.log("running");
});
