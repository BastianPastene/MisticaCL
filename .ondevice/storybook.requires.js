/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/components/Avatar/Avatar.stories.tsx": require("../src/components/Avatar/Avatar.stories.tsx"),
    "./src/components/Badge/Badge.stories.tsx": require("../src/components/Badge/Badge.stories.tsx"),
    "./src/components/Button/Button.stories.tsx": require("../src/components/Button/Button.stories.tsx"),
    "./src/components/Circle/Circle.stories.tsx": require("../src/components/Circle/Circle.stories.tsx"),
    "./src/components/Divider/Divider.stories.tsx": require("../src/components/Divider/Divider.stories.tsx"),
    "./src/components/HorizontalScroll/Horizontal.stories.tsx": require("../src/components/HorizontalScroll/Horizontal.stories.tsx"),
    "./src/components/LoadingBar/LoadingBar.stories.tsx": require("../src/components/LoadingBar/LoadingBar.stories.tsx"),
    "./src/components/Logo/Logo.stories.tsx": require("../src/components/Logo/Logo.stories.tsx"),
    "./src/components/NavBar/NavBar.stories.tsx": require("../src/components/NavBar/NavBar.stories.tsx"),
    "./src/components/Placerholder/Placeholder.stories.tsx": require("../src/components/Placerholder/Placeholder.stories.tsx"),
    "./src/components/ProgressBar/ProgressBar.stories.tsx": require("../src/components/ProgressBar/ProgressBar.stories.tsx"),
    "./src/components/Sheet/Sheet.stories.tsx": require("../src/components/Sheet/Sheet.stories.tsx"),
    "./src/components/Skeletons/SkeletonCircle.stories.tsx": require("../src/components/Skeletons/SkeletonCircle.stories.tsx"),
    "./src/components/Skeletons/SkeletonLine.stories.tsx": require("../src/components/Skeletons/SkeletonLine.stories.tsx"),
    "./src/components/Skeletons/SkeletonRectangle.stories.tsx": require("../src/components/Skeletons/SkeletonRectangle.stories.tsx"),
    "./src/components/Skeletons/SkeletonRow.stories.tsx": require("../src/components/Skeletons/SkeletonRow.stories.tsx"),
    "./src/components/Skeletons/Skeletons.stories.tsx": require("../src/components/Skeletons/Skeletons.stories.tsx"),
    "./src/components/Skeletons/SkeletonText.stories.tsx": require("../src/components/Skeletons/SkeletonText.stories.tsx"),
    "./src/components/Stepper/Stepper.stories.tsx": require("../src/components/Stepper/Stepper.stories.tsx"),
    "./src/components/Tag/Tag.stories.tsx": require("../src/components/Tag/Tag.stories.tsx"),
    "./src/components/Text/Text.stories.tsx": require("../src/components/Text/Text.stories.tsx"),
    "./src/components/Title/Title.stories.tsx": require("../src/components/Title/Title.stories.tsx"),
    "./src/components/Welcome/Welcome.stories.tsx": require("../src/components/Welcome/Welcome.stories.tsx"),
  };
};

configure(getStories, module, false);