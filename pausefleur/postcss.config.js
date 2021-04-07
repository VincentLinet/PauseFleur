const postCssPresetEnv = require("postcss-preset-env");
const postCssNano = require("cssnano");
module.exports = {
  plugins: [
    postCssPresetEnv,
    postCssNano({
      preset: ["default"]
    })
  ]
};
