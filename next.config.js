const withMdxEnhanced = require("next-mdx-enhanced");
const withYaml = require("next-plugin-yaml");

module.exports = withYaml(
  withMdxEnhanced({
    layoutPath: "components/layouts",
    defaultLayout: true,
    fileExtensions: ["mdx"],
    remarkPlugins: [],
    rehypePlugins: [],
    usesSrc: false,
    extendFrontMatter: {
      process: (mdxContent, frontMatter) => {},
      phase: "prebuild|loader|both",
    },
    reExportDataFetching: false,
    webpack: function (config) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "js-yaml-loader",
      });
      return config;
    },
  })({})
);
