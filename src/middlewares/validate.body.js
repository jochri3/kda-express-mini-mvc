const kdaStudents = require("../mock-db/students");

const validateBody = (req, res, next) => {
  const values = [req.body.nom, req.body.prenom];
  if (values.some((value) => value.length === 0)) {
    return res.status(422).json({ message: "please fill correctly fields" });
  }
  next();
};

module.exports = validateBody;
