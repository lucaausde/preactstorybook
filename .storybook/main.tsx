module.exports = {
  addons: [
    "@storybook/preact",
    "@storybook/addon-storysource",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-viewport/register",
  ],
  stories: ["../src/components/**/*.stories.tsx"],
};
