import { Database } from "../lib/types";
import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";

export const resolvers: IResolvers = {
  Query: {
    listings: async (_root: undefined, _args: {}, { db }: { db: Database }) => {
      return await db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ) => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteRes) {
        throw new Error("failed to delete listing");
      }
      return deleteRes;
    },
  },
};
