import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";

export default defineConfig([
  {
    extends: [astro.configs.recommended],

    files: ["**/*.{astro,js,jsx,mjs,ts,tsx}"],

    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
]);
