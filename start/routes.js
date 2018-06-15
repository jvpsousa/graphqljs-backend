'use strict'

const Route = use('Route')
const GraphqlAdonis = use('ApolloServer')
const schema = require('../app/data/schema')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

Route.route('/graphql', ({ request, auth, response }) => {
  return GraphqlAdonis.graphql({
    schema,
    context: { auth }
  }, request, response)
}, ['GET', 'POST'])

Route.get('graphiql', ({ request, auth, response }) => {
  return GraphqlAdonis.graphiql({ endpoint: '/graphql' }, request, response)
})