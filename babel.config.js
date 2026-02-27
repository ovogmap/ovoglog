import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dev = process.env.NODE_ENV !== "production";

const babelConfig = {
  presets: ["next/babel"],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev,
        runtimeInjection: false,
        enableInlinedConditionalMerge: true,
        treeshakeCompensation: true,
        aliases: { "@/*": [join(__dirname, "src", "*")] },
        unstable_moduleResolution: { type: "commonJS" },
      },
    ],
  ],
};

export default babelConfig;
