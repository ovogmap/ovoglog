import babelConfig from "./babel.config.js";

const postcssConfig = {
  plugins: {
    "@stylexjs/postcss-plugin": {
      include: [
        "src/app/**/*.{js,jsx,ts,tsx}",
        "src/components/**/*.{js,jsx,ts,tsx}",
      ],
      babelConfig: {
        babelrc: false,
        parserOpts: { plugins: ["typescript", "jsx"] },
        plugins: babelConfig.plugins,
      },
      useCSSLayers: true,
    },
    autoprefixer: {},
  },
};

export default postcssConfig;
