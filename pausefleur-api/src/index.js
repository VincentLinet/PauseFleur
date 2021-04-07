import express from "express";
import cors from "cors";
import helmet from "helmet";
import config from "config";
import bodyParser from "body-parser";

import messageRoute from "./routes/message";
import themeRoute from "./routes/theme";

import { resetTheme } from "./controllers/theme";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/message", messageRoute);
app.use("/api/theme", themeRoute);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.send({ message: err.message, detail: err });
});

const port = config.get("app.port");
console.log(`Served on port ${port}`);

resetTheme();

app.listen(port);
