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
    "prettier/prettier": "error",
    "no-param-reassign": 0,
  },
};
