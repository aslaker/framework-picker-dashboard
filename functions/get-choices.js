const faunadb = require('faunadb')

const queryTools = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

const { Map, Paginate, Match, Index, Lambda, Select, Get, Var} = queryTools;

exports.handler = () => {
  return client.query(Map(
    Paginate(Match(Index("all_votes"))),
    Lambda("X", Select(["data", "choice"], Get(Var("X"))))
  )).then((results) => {
    return {
      statusCode: 200,
      body: JSON.stringify(results)
    }
  }).catch(err => {
    return {
      statusCode: 400,
      body: JSON.stringify(err)
    }
  })
}