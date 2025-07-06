// eslint.config.mjs

import next from 'eslint-config-next';

export default [
  {
    ...next(),
    rules: {
      'react/no-unescaped-entities': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
