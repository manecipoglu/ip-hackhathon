const { Router } = require("express");
const { readFile } = require("../utils/helpers");

const gymRouter = Router();
const FILE_PATH = "./data/gyms.json";

//Get all gyms
gymRouter.get("/", (req, res) => {
  const gymList = readFile(FILE_PATH);

  return res.status(200).json(gymList);
});

//Get a single gym by id
gymRouter.get("/:id", (req, res) => {
  const gyms = readFile(FILE_PATH);
  const gym = gyms.find((gym) => gym.id === req.params.id);
  if (!gym) return res.status(404).send("The gym is not found");
  res.status(200).json(gym);
});

//Get classes of a gym by id
gymRouter.get("/:id/classes", (req, res) => {
  const classes = readFile("./data/classes.json");
  const gymClasses = classes.filter(
    (eachClass) => eachClass.gymID === req.params.id
  );
  if (!gymClasses) return res.status(404).send("No classes found");
  res.status(200).json(gymClasses);
});

//Get reviews of a gym by id
gymRouter.get("/:id/reviews", (req, res) => {
  const reviews = readFile("./data/reviews.json");
  const gymReviews = reviews.filter((review) => review.gymID === req.params.id);
  if (!gymReviews) return res.status(404).send("No reviews found");
  res.status(200).json(gymReviews);
});

module.exports = gymRouter;
