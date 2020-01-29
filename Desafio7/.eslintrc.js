module.exports = {
   env: {
      es6: true,
   },
   extends: ['airbnb', 'prettier', 'prettier/react'],
   globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      __DEV__: 'readonly',
   },
   parser: 'babel-eslint',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
   },
   plugins: ['react', 'prettier'],
   rules: {
      'react/state-in-constructor': ['off', 'never'],
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [
         'warn',
         {
            extensions: ['.jsx', '.js'],
         },
      ],
      'no-console': ['error', { allow: ['tron'] }],
      'import/prefer-default-export': 'off',
   },
};
