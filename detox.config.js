module.exports = {
  testRunner: 'jest',
  runnerConfig: 'e2e/jest.config.js',
  configurations: {
    'ios.sim': {
      type: 'ios.simulator',
      device: { type: 'iPhone 11' },
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/app.app',
    },
  },
};
