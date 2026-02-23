import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
  recommended: true,
});

export default [
  // use Next.js recommended config
  ...compat.extends("next/core-web-vitals"),

  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      // optional custom rules
    },
  },
];
