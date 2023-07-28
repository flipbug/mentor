import { CollectionConfig } from "payload/types";

const Subjects: CollectionConfig = {
  slug: "subjects",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
    admin: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: false,
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      index: true,
    },
    {
      name: "media",
      type: "array",
      required: false,
      labels: {
        singular: "Media",
        plural: "Media",
      },
      fields: [
        {
          name: "media",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "comment",
          type: "text",
          required: false,
        },
      ],
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      required: false,
    },
  ],
};

export default Subjects;
