import { CollectionConfig } from "payload/types";

const Iterations: CollectionConfig = {
  slug: "iterations",
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
      name: "theme",
      type: "text",
      required: true,
    },
    {
      name: "purpose",
      type: "text",
      required: false,
    },
    {
      name: "notes",
      type: "textarea",
      required: false,
    },
    {
      name: "startDate",
      type: "date",
      required: true,
      defaultValue: () => new Date(),
    },
    {
      name: "endDate",
      type: "date",
      required: true,
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

export default Iterations;
