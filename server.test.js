const environment = process.env.NODE_ENV || "test";
const configuration = require("./knexfile")[environment];
const database = require("knex")(configuration);
const request = require("supertest");
const app = require("./server.js");

describe("server", () => {
  beforeEach(async () => {
    await database.seed.run();
  });
  describe("GET /api/v1/users", () => {});
});
