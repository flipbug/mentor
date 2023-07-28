import { CollectionConfig } from "payload/types";

const Sessions: CollectionConfig = {
  slug: "sessions",
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
      defaultValue: () => "Session " + new Date().toLocaleDateString('de-CH'),
    },
    {
      name: "subject",
      type: "relationship",
      relationTo: "subjects",
      hasMany: false,
      index: true,
      required: true,
    },
    {
      name: "iteration",
      type: "relationship",
      relationTo: "iterations",
      hasMany: false,
      index: true,
      required: true,
    },

    {
      name: "notes",
      type: "textarea",
      required: false,
    },
    {
      name: "timeEntries",
      type: "array",
      required: false,
      fields: [
        {
          name: "timeEntries",
          type: "relationship",
          relationTo: "timeentries",
          hasMany: true,
          required: false,
        },
      ],
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      index: true,
    },
  ],
};

export default Sessions;
