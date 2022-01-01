import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import pkg from "./package.json";

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, "$3")
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase());

export default {
  input: "src/index.js",
  // https://rollupjs.org/guide/en/#outputformat
  output: [
    { file: pkg.module, format: "es" },
    { file: pkg.main, format: "umd", name },
  ],
  // https://rollupjs.org/guide/en/#rollupplugin-node-resolve (plugin to find external modules)
  // https://github.com/sveltejs/rollup-plugin-svelte#pkgsvelte
  plugins: [svelte(), resolve()],
};
