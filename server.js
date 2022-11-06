const express = require("express");
const app = express();
const cors = require("cors");
const timeout = require("connect-timeout");
require("dotenv").config();

const PORT = process.env.PORT | 3000;
app.use(express.json());
app.use(timeout("5s"));
app.use(cors());

/** Rules of the API */
app.use((req, res, next) => {
  if (!req.timedout) next();
});

/** Routing */

// Not found handling
app.use((req, res, next) => {
  res.status(404);
  const error = new Error("not found");
  next(error);
});

// Errors handling
app.use((error, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running and app is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
