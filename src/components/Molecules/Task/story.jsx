import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});

Default.args = {
  defalutValue: "taskname",
  defalutIsEditing: false,
  onTaskComplete: () => console.log("task complete"),
  onEditComplete: (text) => console.log(`taaskname changed: ${text}`),
};
