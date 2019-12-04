const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set("port", process.env.PORT || 3000);
app.use(express.json());
