const environment = process.env.NODE_ENV || "development";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set("port", process.env.PORT || 3000);
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}.`);
});

app.get("/api/v1/users", (request, response) => {
  database("users")
    .select()
    .then(users => {
      response.status(200).json(users);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});
