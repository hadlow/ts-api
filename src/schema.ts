import { gql } from "apollo-server-express";

const schema = gql`
  type Document {
    _id: String!,
    user: String!,
    template: String!,
    title: String,
    slug: String,
    created_at: String,
    updated_at: String,
  }

  type Query {
    documents: [Document]
  }
`

export default schema;
