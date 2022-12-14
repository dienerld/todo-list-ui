module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/no-unused-prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/extensions': [
      'error',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/export': {
      typescript: {},
    },
  },
};
