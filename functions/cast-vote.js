const faunadb = require('faunadb')

const queryTools = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET
})

const { Create, Collection} = queryTools;

exports.handler = (event) => {
  const data = JSON.parse(event.body);

  
  return client.query(Create(Collection('votes'), { data: data }))
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      }
    }).catch(err => {
      return {
        statusCode: 400,
        body: JSON.stringify(err)
      }
    })
}