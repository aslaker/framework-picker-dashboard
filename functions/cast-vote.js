/* Import faunaDB sdk */
const { Vote } = require("./data/sequelize");

exports.handler = (event) => {
  console.log("Function `todo-read-all` invoked");

  const { email, choice } = JSON.parse(event.body);

  Vote.create({
    email,
    choice,
  })
    .then(() => {
      return {
        statusCode: 201,
        body: JSON.stringify({ message: "success" }),
      };
    })
    .catch((err) => {
      const { errors } = err;
      const { path, type } = errors[0];

      if (
        errors.length === 1 &&
        path === "email" &&
        type === "unique violation"
      ) {
        return {
          statusCode: 406,
          body: JSON.stringify({
            message:
              "The user associated with this email address already voted.  You can only vote once!",
          }),
        };
      } else {
        return {
          statusCode: 500,
          body: JSON.stringify({
            message:
              "There was an issue with our database.  Please refresh and try saving again.",
          }),
        };
      }
    });
};
