module.exports = {
  multipass: true,

  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },

    "removeDimensions",

    // https://github.com/svg/svgo/blob/main/plugins/removeAttrs.js
    {
      name: "removeAttrs",
      params: {
        attrs: "svg:fill:none",
      },
    },

    // https://github.com/tailwindlabs/heroicons/blob/master/svgo.solid.yaml
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          {
            "aria-hidden": true,
          },
        ],
      },
    },

    // https://github.com/svg/svgo/blob/main/plugins/sortAttrs.js
    {
      name: "sortAttrs",
      params: {
        xmlnsOrder: "alphabetical",
      },
    },
  ],
};
