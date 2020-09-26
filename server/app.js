const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logging = require("morgan");
const nocache = require("nocache");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

require("./configs/database");
require("./configs/redis");

const app_name = require("./package.json").name;
const logger = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(nocache());
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, origin && origin.startsWith("http://localhost:"));
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(logging("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set the public folder to "~/client/build/"
// Example: http://localhost:5000/favicon.ico => Display "~/client/build/favicon.ico"
app.use(express.static(path.join(__dirname, "../build")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "irongenerator",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

app.use("/api", require("./routes/index"));
app.use("/api/twitter", require("./routes/twitter"));
app.use("/api/tiktok", require("./routes/tiktok"));
app.use("/api/instagram", require("./routes/instagram"));

// For any routes that starts with "/api", catch 404 and forward to error handler
app.use("/api/*", (req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler
app.use((err, req, res, next) => {
  logger("SERVER ERROR: %o", err);
  if (!res.headersSent) {
    res.status(err.status || 500);
    if (process.env.NODE_ENV === "production") res.json(err);
    else
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
  }
});

module.exports = app;
