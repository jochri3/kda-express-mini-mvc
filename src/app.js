const express = require("express");
const cors = require("cors");
const kdaStudents = require("./mock-db/students");

const app = express();

app.use(express.json());
app.use(cors());

const baseURI = "/api/students";

app.get(`${baseURI}/`, (req, res) => {
  res.send(kdaStudents);
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port http://localhost:${PORT}`);
});
