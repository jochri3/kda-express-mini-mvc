const express = require("express");
const cors = require("cors");
const studentRouter = require("./ressources/student/student.routes");
const path = require("./config/paths");

const app = express();

app.use(express.json());
app.use(cors());
app.use(path.studentsBaseURI, studentRouter);

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

app.put(`${baseURI}/:id`, [checkStudentExistence, validateBody], (req, res) => {
  const student = req.student;
  student.nom = req.body.nom;
  student.prenom = req.body.prenom;
  res
    .status(200)
    .json({ message: `resource updated successfully`, result: student });
});

app.post(`${baseURI}/`, validateBody, (req, res) => {
  const student = { id: uuidv4(), nom: req.body.nom, prenom: req.body.prenom };
  kdaStudents.push(student);
  res
    .status(200)
    .json({ message: `resource created successfully`, result: student });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port http://localhost:${PORT}`);
});
