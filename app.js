const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/mh", (req, res) => {
  res.send([
    "Mumbai",
    "Nagpur",
    "Aurangabad",
    "Pune",
    "Nanded",
    "Akola",
    "Ahmadnagar",
  ]);
});
app.get("/", (req, res) => {
  res.send("State and Cities Names....");
});
app.get("/ap", (req, res) => {
  res.send(["Vijayawada", "Vishakhapatnam", "Kakinada", "Kurnool"]);
});
app.get("/pb", (req, res) => {
  res.send([
    "Amritsar",
    "Patiala",
    "Kapurthla",
    "Jalandhar",
    "Hoshiarpur",
    "Hyundai Alcazar",
  ]);
});
app.get("/telengana", (req, res) => {
  res.send([
    "Hyderabad",
    "Medak",
    "Bhupalpalli",
    "Nirmal",
    "Adilabed",
    "Nizamabed",
    "Vikarabad",
    "Bhuvanagiri",
  ]);
});

app.listen(2020, () => {
  console.log("API is running on 2020");
});
