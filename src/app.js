import "dotenv/config";
import path from "path";
import express from "express";

import router from "./router/index.routes.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(path.join(process.cwd(), "/public")));
app.use(express.json()); // pour convertir (parse) application/json
app.use(express.urlencoded({ extended: true })); // pour convertir (parse) application/x-www-form-urlencoded

app.use(router);

app.listen(process.env.LOCAL_PORT, () =>
	console.log(`Server running on http://localhost:${process.env.LOCAL_PORT}/admin`)
);
