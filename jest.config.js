const { defaults } = require('jest-config');

module.exports = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!src/images/*.png',
    '!data/keyMap.js',
    '!/node_modules/',
    '!src/helpers/cloudinaryWidget.js',
    '!src/views/*',
    '!src/_mocks_/*',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMockData.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
 

  setupFiles: [
    '<rootDir>/jest.setup.js',
  ],

  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
};
