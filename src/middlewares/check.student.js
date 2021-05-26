const kdaStudents = require("../mock-db/students");

const checkStudentExistence = (req, res, next) => {
  const student = kdaStudents.find((student) => student.id === req.params.id);
  if (!student) return res.status(404).json({ message: "not found" });
  req.student = student;
  next();
};

module.exports = checkStudentExistence;
