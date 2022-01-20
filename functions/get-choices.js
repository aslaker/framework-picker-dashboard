const { q, clientQuery } = require("./util/connections");

exports.handler = () => {
  return clientQuery
    .query(
      q.Map(
        q.Paginate(q.Match(q.Index("all_votes"))),
        q.Lambda("X", q.Select(["data", "framework"], q.Get(q.Var("X"))))
      )
    )
    .then((results) => {
      return {
        statusCode: 200,
        body: JSON.stringify(results),
      };
    })
    .catch((err) => {
      return {
        statusCode: 400,
        body: JSON.stringify(err),
      };
    });
};
