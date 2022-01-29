'use strict';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ],
  overrides: {
    test: /\.tsx?$/,
    presets: [
      '@babel/preset-env',
      '@babel/preset-react',
      [
        '@babel/preset-typescript',
        {
          allExtensions: true,
          isTSX: true,
        },
      ],
    ],
  },
  plugins: [
    [
      require('./scripts/error-codes/transform-error-messages'),
      {noMinify: true},
    ],
  ],
};
