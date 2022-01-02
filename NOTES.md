# Notes

> [Figma](https://www.figma.com/file/jYuyViEcLz4fj2DE6AFLFP/svelte-logos?node-id=0%3A1)

- [rollup-plugin-svelte-svg](https://github.com/codefeathers/rollup-plugin-svelte-svg).
- [svg-to-svelte](https://github.com/metonym/svg-to-svelte).
- [svelvg](https://github.com/metonym/svelvg):
  - `npx svelvg glob=../svg/figma outDir=test_svelvg`.
  - [SVGR example](https://react-svgr.com/docs/what-is-svgr/).
- [svg-parser](https://www.npmjs.com/package/svg-parser).
- [svgson](https://www.npmjs.com/package/svgson).
- Storybook:
  - [Essential addons](https://storybook.js.org/docs/svelte/essentials/introduction).
  - `npx sb init --help` ([npm](https://www.npmjs.com/package/@storybook/cli)).
  - [@storybook/svelte](https://www.npmjs.com/package/@storybook/svelte) ([repo](https://github.com/storybookjs/storybook/tree/v6.4.9/app/svelte)). [Blog post](https://storybook.js.org/blog/storybook-for-svelte/).
  - Manual setup ([source](https://www.nuskin.com/static/design-components/?path=/info/design-components-getting-started--welcome-to-storybook)):
    - `npm install --save-dev @storybook/svelte`.
    - `npm install --save-dev @storybook/addon-svelte-csf` ([repo](https://github.com/storybookjs/addon-svelte-csf)).
    - Optional: `npm install --save-dev @babel/core svelte-loader` ([peer dependencies](https://github.com/storybookjs/storybook/blob/v6.4.9/app/svelte/package.json#L67)).
- [svelte-luna/LUNA](https://github.com/loskware/svelte-luna) (UI kit).
