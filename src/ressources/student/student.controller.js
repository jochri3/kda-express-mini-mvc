const kdaStudents = require("../../mock-db/students");
//const uuidv4 = require('uuidv4');
function getStudents(req, res) {
  res.send(kdaStudents);
}

function getStudentById(req, res) {
  const student = req.student;
  res.send(student);
}

function deleteStudent(req, res) {
  const student = req.student;
  kdaStudents.splice(kdaStudents.indexOf(student), 1);
  res.status(200).json({ message: `resource deleted successfully` });
}

function updateStudent(req, res) {
  const student = req.student;
  student.nom = req.body.nom;
  student.prenom = req.body.prenom;
  res
    .status(200)
    .json({ message: `resource updated successfully`, result: student });
}

// function createStudent(req, res) {
//   const student = { id: uuidv4, nom: req.body.nom, prenom: req.body.prenom };
//   kdaStudents.push(student);
//   res
//     .status(200)
//     .json({ message: `resource created successfully`, result: student });
// }

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
