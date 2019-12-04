exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "saadbar7", password: "shorty416" },
        { id: 2, username: "saadbar416", password: "shorty416" }
      ]);
    });
};
