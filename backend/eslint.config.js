import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jestPligin from "eslint-plugin-jest";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
  jestPligin.configs["flat/recommended"],
]);
