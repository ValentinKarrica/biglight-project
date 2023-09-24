const express = require("express");
const publicRouter = require("./routes/publicRoutes");
const cors = require("cors");
const AppError = require("./utils/appError");

// const morgan = require('morgan');

const app = express();
app.use(cors());

// 1) MIDDLEWARES
// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use(express.json());

// 3) ROUTES
app.use("/", publicRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
