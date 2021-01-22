/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  transform: {
    '^.+\\.(js|ts|tsx)$': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testRegex: '/src/.*\\.spec?\\.(js|ts|tsx)$',
  moduleFileExtensions: ['ts', 'js', 'tsx'],
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  setupFilesAfterEnv: [
    './jest-enzyme.setup.js'
  ]
};