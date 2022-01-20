const faunadb = require("faunadb");
const q = faunadb.query;

const clientQuery = new faunadb.Client({
  domain: "db.us.fauna.com",
  secret: process.env.FAUNADB_SECRET,
});

module.exports = { clientQuery, q };
