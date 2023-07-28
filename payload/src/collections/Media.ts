import path from "path";
import type { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
    admin: () => true,
  },
  upload: {
    staticDir: path.resolve(__dirname, "../../media"),
    // Specify the size name that you'd like to use as admin thumbnail
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: "center",
        name: "thumbnail",
      },
      {
        width: 800,
        fit: "cover",
        name: "rectangle",
      },
      {
        width: 1200,
        height: 400,
        fit: "cover",
        name: "header",
      },

    ],
  },
  fields: [],
};

export default Media;
