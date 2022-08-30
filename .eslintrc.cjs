module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-console': 0,

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        // "jsx": "never",
        // "ts": "never",
        // "tsx": "never"
      },
    ],
  },
};
