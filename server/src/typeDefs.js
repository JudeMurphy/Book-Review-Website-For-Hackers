/*jshint esversion: 9 */

const typeDefs = `
schema {
  query: Query
}

type Query {
  books: [Book]
  reviews: [Review]
  users: [User]
}

type Review {
  id: ID!
  rating: Int
  title: String
  comment: String
  book: Book
  user: User
}

type Book {
  id: ID!
  title: String!
  description: String!
  imageURL(size: ImageSize = LARGE): String!
  rating: Float
  subtitle: String
  ratingCount: Int
  authors: [Author]
}

type User {
  id: ID!
  email: String!
  name: String!
}

type Author {
  id: ID!
  name: String!
}

enum ImageSize {
  SMALL
  LARGE
}
`;

export default typeDefs;
