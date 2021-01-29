const { Sequelize, DataTypes } = require("sequelize");
const VoteModel = require("./models/Vote");

const { votes } = require("./seedData.json");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./functions/data/apptest.db",
});

const Vote = VoteModel(sequelize, DataTypes);

sequelize
  .sync({ force: process.env.SEED })
  .then(() => {
    if (process.env.SEED) {
      votes.forEach((seedItem) => {
        Vote.create({
          email: seedItem.email,
          choice: seedItem.choice,
        });
      });
      console.log("Data Seeded Successfully");
      console.log("Database and Tables Created");
    }
    console.log("Database Connection Established");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = {
  Vote,
  db: sequelize,
};
