import { CollectionConfig } from "payload/types";

const TimeEntries: CollectionConfig = {
  slug: "timeentries",
  admin: {
    hidden: true,
    useAsTitle: "start",
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
      name: "start",
      type: "date",
      required: false,
    },
    {
      name: "end",
      type: "date",
      required: false,
    },
    {
      name: "isRunning",
      type: "checkbox",
      required: false,
      defaultValue: false,
    },
  ],
};

export default TimeEntries;
