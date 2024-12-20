
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginReact.configs.flat.recommended,

  { 
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-console": "off",
      "no-redeclare": "error",
      "no-unused-vars": "off",
      "semi": ["error", "always"],
      "eqeqeq": ["error", "always"],
      "no-undef": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",

    },
    settings: {
      react: {
        version: 'detect', 
      },
    },
    ignores: ["node_modules"],
  },
  pluginJs.configs.recommended,
];
