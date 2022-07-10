export default (config) => {
  const { options, ...babelLoaderRule } = config.module.rules[0]; // Get the babel rule and options
  options.presets.push(
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@linaria"
  ); // Push the necessary presets
  config.module.rules[0] = {
    ...babelLoaderRule,
    loader: undefined, // Disable the predefined babel-loader on the rule
    use: [
      {
        loader: "babel-loader",
        options,
      },
    ],
  };
};
