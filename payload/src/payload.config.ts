import { buildConfig } from "payload/config";
import path from "path";
import Users from "./collections/Users";
import Media from "./collections/Media";
import Iterations  from "./collections/Iterations";
import Subjects from "./collections/Subjects";
import Tags from "./collections/Tags";
import TimeEntries from "./collections/TimeEntries";
import Sessions from "./collections/Sessions";

export default buildConfig({
  serverURL: process.env.PAYLOAD_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Iterations, Subjects, Tags, TimeEntries, Sessions],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },

  cors: "*",
});
