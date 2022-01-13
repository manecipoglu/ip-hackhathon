require("dotenv").config();
const express = require("express");
const cors = require("cors");
const instructorsRouter = require("./routes/instructors");
const gymsRouter = require("./routes/gyms");

const app = express();

const { PORT, CLIENT_URL } = process.env;

app.use(cors({ origin: CLIENT_URL || true }));
app.use(express.json());
app.use("/instructors", instructorsRouter);
app.use("/gyms", gymsRouter);

app.listen(PORT, () =>
  console.log(`🚀🚀 Server is live @http://localhost:${PORT || 8080}`)
);
