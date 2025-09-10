import type { CollectionConfig } from "payload";

export const QuickLinks: CollectionConfig = {
  slug: "quick-links",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "isActive"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
    {
      name: "icon",
      type: "select",
      options: [
        { label: "Bar Chart", value: "bar-chart" },
        { label: "File Text", value: "file-text" },
        { label: "Banknote", value: "banknote" },
        { label: "Chart Combined", value: "chart-combined" },
        { label: "Dollar Sign", value: "dollar-sign" },
        { label: "Landmark", value: "landmark" },
      ],
      required: true,
    },
    {
      name: "color",
      type: "select",
      options: [
        { label: "Blue", value: "blue" },
        { label: "Green", value: "green" },
        { label: "Amber", value: "amber" },
        { label: "Purple", value: "purple" },
        { label: "Red", value: "red" },
        { label: "Indigo", value: "indigo" },
      ],
      required: true,
    },
    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
