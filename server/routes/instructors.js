const { Router } = require("express");
const instructorsRouter = Router();
const { readFile, writeFile } = require("../utils/helpers");

const FILE_PATH = "./data/instructors.json";

//Get all instructors at all gyms
instructorsRouter.get("/", (_, res) => {
  const instructorsList = readFile(FILE_PATH);
  res.status(200).json(instructorsList);
});

//Get single instructor by id
instructorsRouter.get("/:id", (req, res) => {
  const instructorsId = req.params.id;
  const instructors = readFile(FILE_PATH);

  const instructor = instructors.find(
    (instructor) => instructor.id === instructorsId
  );
  if (!instructor) return res.status(404).send("The instructor is not found");
  res.status(200).json(instructor);
});

//Get all the instructors from a single gym
instructorsRouter.get("/gyms/:gymId", (req, res) => {
  const gymId = req.params.gymId;
  const instructorsList = [];

  const instructors = readFile(FILE_PATH);
  instructors.forEach((instructor) => {
    if (instructor.gymID === gymId) {
      instructorsList.push(instructor);
    }
  });

  res.status(200).json(instructorsList);
});

module.exports = instructorsRouter;
