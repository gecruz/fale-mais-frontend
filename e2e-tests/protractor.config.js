// jshint strict: false
exports.config = {
  framework: 'mocha',
  mochaOpts: {
    timeout: 9000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['destinations.spec.js']
}
