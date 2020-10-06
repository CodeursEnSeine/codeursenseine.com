import React from "react";
import { Text } from "@chakra-ui/core";

import { Card } from ".";

export default {
  title: "Components/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </Text>
  ),
};

export const Link = Template.bind({});
Link.args = {
  ...Default.args,
  isLink: true,
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  variant: "primary",
};
