require("dotenv").config();
const express = require("express");
const cors = require("cors");
const studentRouter = require("./ressources/student/student.routes");
const path = require("./config/paths");

const app = express();

app.use(express.json());
app.use(cors());
app.use(path.studentsBaseURI, studentRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port http://localhost:${PORT}`);
});
