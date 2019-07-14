/*jshint esversion: 9 */

const typeDefs = `
schema {
  query: Query
}
type Query {
  books: [Book]
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