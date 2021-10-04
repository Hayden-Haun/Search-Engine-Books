const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String
    bookCount: Int
    savedBooks: [savedBook]!
  }

  type Book {
    bookId: String
    authors: String
    description: String
    image: String
    link: String!
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getSingleUser(userId: Id!)
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(
        authors: String!
        description String!
        bookId String!
        image: String!
        link: String!
        title: String! 
    ): Book
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
