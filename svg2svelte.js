const { parse, walk } = require("svelte/compiler");
const { readdir, readFile, writeFile } = require("fs/promises");
const path = require("path");
const { pascalCase } = require("pascal-case");

// Source: https://github.com/metonym/svelvg/blob/v0.8.4/src/template.ts#L18
function applySvelteTemplate(source) {
  const ast = parse(source);

  let svg_attributes = "";
  let svg_children = "";

  walk(ast.html, {
    enter(node) {
      if (node.type === "Element" && node.name === "svg") {
        node.attributes.forEach(({ name, value }) => {
          svg_attributes += ` ${name}="${value[0].raw}"`;
        });

        node.children.forEach((child) => {
          svg_children += source.slice(child.start, child.end);
        });
      }
    },
  });

  return `<svg${svg_attributes} {...$$restProps}>${svg_children}</svg>`;
}

async function main() {
  const svgInputDir = path.join(process.cwd(), "svg/svgo");
  const svelteOutputDir = path.join(process.cwd(), "src");

  const componentNames = [];
  const svgFiles = await readdir(svgInputDir);

  for (const svgFile of svgFiles) {
    const source = await readFile(path.join(svgInputDir, svgFile), {
      encoding: "utf-8",
    });

    const svelteComponent = applySvelteTemplate(source);

    // https://www.npmjs.com/package/camel-case
    const svelteComponentFilename = `${pascalCase(
      path.parse(svgFile).name
    )}Logo.svelte`;
    componentNames.push(svelteComponentFilename);

    writeFile(
      path.join(svelteOutputDir, svelteComponentFilename),
      `${svelteComponent}\n`
    );

    console.log(`✔ ${svgFile} > ${svelteComponentFilename}`);
  }

  const index = componentNames
    .map((n) => `export { default as ${path.parse(n).name} } from "./${n}";\n`)
    .join("");
  writeFile(path.join(svelteOutputDir, "index.js"), index);

  // Source: https://github.com/metonym/svelvg/blob/v0.8.4/src/create-library.ts#L97
  const logoWord = componentNames.length === 1 ? "logo" : "logos";
  console.log(
    `\n⚡ Converted ${componentNames.length} ${logoWord} from "${svgInputDir}" to Svelte components in "${svelteOutputDir}"`
  );
}

main();
