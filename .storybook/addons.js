import "@storybook/addon-knobs/register";
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",
  brandTitle: "AimHo Boilerplate Storybook",
  brandUrl: "https://github.com/Aimho/boilerplate-storybook",
});

addons.setConfig({
  theme: theme,
  showPanel: false,
  panelPosition: "right",
});
