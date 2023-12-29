module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["prettier", "react-refresh", "simple-import-sort"],
  rules: {
    "prettier/prettier": "error",
    "block-scoped-var": "error",
    curly: "error",
    "new-cap": "error",
    "dot-notation": ["error", { allowKeywords: false }],
    "array-callback-return": "error",
    "react-refresh/only-export-components": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  settings: {
    react: {
      version: "detect",
    },
    ignorePatterns: ["node_modules"],
  },
};
