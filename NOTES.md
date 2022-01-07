# Notes

## Development

- `npm install`.
- `npm run storybook`.
- `npm run build`.
- `npm pack --dry-run`.

## Deployment

- `npm version minor` or `npm version patch` or `npm version major`.
- `git push --follow-tags`.
- Check [GitHub](https://github.com/joaopalmeiro/svelte-logos/actions) and [npm](https://www.npmjs.com/package/svelte-logos).

## Misc

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
    - `npm install --save-dev svelte-loader` (required to deploy to Vercel).
    - Optional: `npm install --save-dev @babel/core svelte-loader` ([peer dependencies](https://github.com/storybookjs/storybook/blob/v6.4.9/app/svelte/package.json#L67)).
    - Vercel:
      - `BUILD COMMAND`: `npm run build-storybook`.
      - `OUTPUT DIRECTORY`: `storybook-static`.
      - `INSTALL COMMAND`: `npm ci`.
      - `Node.js Version`: `14.x`.
- [svelte-luna/LUNA](https://github.com/loskware/svelte-luna) (UI kit).
- [shape-rendering](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering) attribute (`geometricPrecision`).
