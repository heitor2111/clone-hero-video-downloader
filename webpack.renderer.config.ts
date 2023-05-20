import type { Configuration } from "webpack";
import { resolve } from "path";

import { rules } from "./webpack.rules";
import { plugins } from "./webpack.plugins";

rules.push({
  test: /\.css$/,
  use: [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "postcss-loader" },
  ],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@hooks": resolve(__dirname, "./src/hooks"),
      "@locales": resolve(__dirname, "./src/locales"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@routes": resolve(__dirname, "./src/routes"),
      "@services": resolve(__dirname, "./src/services"),
      "@utils": resolve(__dirname, "./src/utils"),
    },
  },
};
