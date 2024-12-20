
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
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
      "react/prop-types": 0, 
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-no-target-blank": "off",
    },
    settings: {
      react: {
        version: 'detect', // Automatically detects the React version
      },
  },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
