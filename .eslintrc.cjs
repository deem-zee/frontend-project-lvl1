module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-console": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "always",
        // "jsx": "never",
        // "ts": "never",
        // "tsx": "never"
      }
   ],
  },
};