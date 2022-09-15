import { Schema, model, connect } from 'mongoose';
import { ApolloError } from 'apollo-server-express';

interface IDocument {
  _id: string;
  user: string;
  template: string;
  title?: string;
  slug?: string;
  created_at?: string;
  updated_at?: string;
}

const documentSchema = new Schema<IDocument>({
  _id: { type: String, required: true },
  user: { type: String, required: true },
  template: { type: String, required: true },
  title: String,
  slug: String,
  created_at: String,
  updated_at: String,
});

const Document = model<IDocument>('documents', documentSchema);

const resolvers = {
  Query: {
    documents: async (_: any, args: any) => {
      try {
        return Document.find();
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  }
};

export default resolvers;
