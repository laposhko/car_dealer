module.exports = {
  parser: '@babel/eslint-parser',
  ignorePatterns: ['.next/', '**/.next/**'], // Ignore .next folder and nested folders

  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: ['react', 'react-hooks', 'prettier'],

  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    eqeqeq: ['error', 'always'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
