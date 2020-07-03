# preactstorybook

> A template for Preact apps

State of development: 🐣 [July, 3. 2020]

This is a project template for [Preact](https://preactjs.com) apps. To simplify the development workflow, this template supports [sass/scss](https://sass-lang.com) and [Storybook](https://storybook.js.org) - with some addons. Feel free to use, copy, modify, merge or publish this template.

## Getting started ...

1. After cloning this repository, please install all dependencies with either npm or yarn.

```bash
yarn
npm i
```

2. Once you're done installing the dependencies, start eiter storybook or the webpack development server.

```bash
yarn storybook
yarn dev
```

3. When finished developing, build the app.

```bash
yarn build
```

## New to Preact?

Check out their [guide](https://preactjs.com/guide/v10/getting-started).

## Don't know how to write stories?

See `App.stories.tsx` as reference. `App.stories.tsx` is currently residing at [/src/components/App.stories.tsx](https://github.com/lucaausde/preactstorybook/blob/master/src/components/App.stories.tsx).

```bash
import { h } from "preact";

export default { title: "Button" };

export const withText = () => <div>{process.env.TEST}</div>;

```

---
