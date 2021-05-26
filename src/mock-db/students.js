const { v4: uuidv4 } = require("uuid");

const kdaStudents = [
  { id: uuidv4(), nom: "Kota", prenom: "Typescript" },
  { id: uuidv4(), nom: "Buhendwa", prenom: "FrontMaster" },
  { id: uuidv4(), nom: "Mianza", prenom: "Elle" },
  { id: uuidv4(), nom: "Jeereq", prenom: "Dev Senior" },
];

module.exports = kdaStudents;
