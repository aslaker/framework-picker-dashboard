const { q, clientQuery } = require("./util/connections");

exports.handler = (event) => {
  const data = JSON.parse(event.body);

  console.log("DATA: ", data);

  return clientQuery
    .query(q.Create(q.Collection("votes"), { data: data }))
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((err) => {
      console.log(err);
      return {
        statusCode: 400,
        body: JSON.stringify(err),
      };
    });
};
