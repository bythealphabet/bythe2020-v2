import path from "path";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import render from "./helpers/renderer";
import morgan from "morgan"

import devBundle from "../config/devBundle";

const app = express();
const development = process.env.NODE_ENV === "development";

if (development) {
	devBundle.compile(app);
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("*", render);

export default app;
