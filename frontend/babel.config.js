module.exports = function(api) {
  api.cache(true);

  const presets = [
    ["@babel/env", { targets: { node: "10" } }],
    "@babel/typescript",
    "@babel/react"
  ];
  const plugins = ["@babel/plugin-proposal-export-default-from"];

  return {
    presets,
    plugins
  };
};
