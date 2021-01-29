/* Import faunaDB sdk */
const { Vote, db } = require("./data/sequelize");

console.log(__dirname);

exports.handler = () => {
  console.log("Function `get-choices` invoked");

  return Vote.findAll({
    raw: true,
    attributes: ["choice", [db.fn("COUNT", db.col("*")), "count"]],
    group: "choice",
  })
    .then((votes) => {
      console.log("VOTES: ", votes);
      const response = votes.reduce((responseObject, { choice, count }) => {
        responseObject[choice] = count;
        return responseObject;
      }, {});
      console.log(("RESPONSE: ", response));

      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((err) => {
      return {
        statusCode: 400,
        body: JSON.stringify(err),
      };
    });
};
