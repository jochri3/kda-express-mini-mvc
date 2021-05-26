const express = require("express");
const StudentsController = require("./student.controller");
const { validateBody, checkStudentExistence } = require("../../middlewares");
const studentRouter = express.Router();

studentRouter.get("/", StudentsController.getStudents);
studentRouter.post("/", validateBody, StudentsController.createStudent);
studentRouter.get(
  "/:id",
  checkStudentExistence,
  StudentsController.getStudentById
);

studentRouter.put(
  "/:id",
  [checkStudentExistence, validateBody],
  StudentsController.updateStudent
);
studentRouter.delete(
  "/:id",
  checkStudentExistence,
  StudentsController.deleteStudent
);

module.exports = studentRouter;
