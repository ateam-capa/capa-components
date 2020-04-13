import { configure } from "@storybook/react";

configure(
  require.context("../src/stories", true, /\.stories\.(js|mdx|tsx)$/),
  module
);
