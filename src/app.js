const express = require("express");
const cors = require("cors");
const kdaStudents = require("./mock-db/students");
const checkStudentExistence = require("./middlewares/check.student");

const app = express();

app.use(express.json());
app.use(cors());

const baseURI = "/api/students";

app.get(`${baseURI}/`, (req, res) => {
  res.send(kdaStudents);
});

app.get(`${baseURI}/:id`, checkStudentExistence, (req, res) => {
  const student = req.student;
  res.send(student);
});

app.delete(`${baseURI}/:id`, checkStudentExistence, (req, res) => {
  const student = req.student;
  kdaStudents.splice(kdaStudents.indexOf(student), 1);
  res.status(200).json({ message: `resource deleted successfully` });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port http://localhost:${PORT}`);
});
