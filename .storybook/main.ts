import type { StorybookConfig } from "@storybook/react-webpack5"
import * as path from "path";
const toPath = (_path: any) => path.join(process.cwd(), _path);;

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/*.stories.@(tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: (config: any) => {
    return {
      ...config,
      // https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
  docs: {
    autodocs: true,
  },
};
export default config;
