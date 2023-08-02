module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.js', '*.ts'],
      rules: {
        'no-extra-boolean-cast': 'off',
        quotes: [2, 'single'],
        semi: ['error', 'always'],
        'no-trailing-spaces': 'error',
        'eol-last': 2,
      },
    },
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
};
