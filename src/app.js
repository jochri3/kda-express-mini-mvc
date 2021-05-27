const express = require("express");
const cors = require("cors");
const studentRouter = require("./ressources/student/student.routes");
const path = require("./config/paths");
const studentController = require("./ressources/student/student.controller");
const checkStudentExistence = require("./middlewares/check.student");
const validateBody = require("./middlewares/validate.body");

const app = express();

app.use(express.json());
app.use(cors());
app.use(path.studentsBaseURI, studentRouter);

const baseURI = "/api/students";

app.get(`${baseURI}/`, studentController.getStudents);

app.get(
  `${baseURI}/:id`,
  checkStudentExistence,
  studentController.getStudentById
);

app.delete(
  `${baseURI}/:id`,
  checkStudentExistence,
  studentController.deleteStudent
);

app.put(
  `${baseURI}/:id`,
  [checkStudentExistence, validateBody],
  studentController.updateStudent
);

app.post(`${baseURI}/`, validateBody, studentController.createStudent);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port http://localhost:${PORT}`);
});
