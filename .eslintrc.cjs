module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "vue/no-multiple-template-root": 0,
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
};
