const { ApolloServer, gql } = require("apollo-server");
const connectMongoDb = require("./config/db");

const typeDefs = gql`
    type Query {
        hello: String!
    }
    `;


const resolvers = {
    Query: {
        hello: () => "Hello"
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });



// Connect to Database
//Connect to the database before listening
connectMongoDb().then(() => {
    server.listen().then(({ url }) => {
        console.log(`Server running on ${url}`);
    });
})