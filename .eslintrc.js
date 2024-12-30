const eslintConfig = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "promise"],
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  rules: {
    "react/display-name": 0,
    "react-hooks/rules-of-hooks": "error",
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": [
      process.env.NODE_ENV === "production" ? "error" : 1,
      {
        vars: "all",
        varsIgnorePattern: "^_.+",
        args: "after-used",
        argsIgnorePattern: "^_.+",
      },
    ],

    // Promise rules
    "promise/always-return": 0,
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": 0,
    "promise/no-promise-in-callback": 0,
    "promise/no-callback-in-promise": "warn",
    "promise/avoid-new": 0,
    "promise/no-new-statics": "error",
    "promise/no-return-in-finally": "warn",
    "promise/valid-params": "warn",
    "promise/no-multiple-resolved": "error",
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
    ],
    "max-lines-per-function": [
      "error",
      { max: 250, skipComments: true, skipBlankLines: true },
    ],
  },
};

module.exports = eslintConfig;
