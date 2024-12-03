import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
// @ts-ignore
import logo from "./-static/logo.png";

addons.setConfig({
  theme: {
    ...themes.light,
    brandImage: logo,
    brandUrl: "https://jenda.vercel.app/",
  },
});
