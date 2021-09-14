module.exports = {
  plugins: ["prettier"],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "no-param-reassign": 0,
    "comma-dangle": 0,
  },
};
