import { React } from "react";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.min.css";

import QueryBuilder from "../components/QueryBuilder";

export default {
  title: "Stories",
  component: QueryBuilder,
};

const Template = (args) => <QueryBuilder {...args} />;

export const QueryBuilderStory = Template.bind({});

QueryBuilderStory.args = {
  /*👇 The args you need here will depend on your component */
};
