const extensionPath = __dirname;

exports.config = {
  tests: './*test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://lancasteronline.com',
      show: true,
      windowSize: '1400x1200',
      chrome: {
        args: [ `--disable-extensions-except=${extensionPath}`, `--load-extension=${extensionPath}`, "--disable-gpu", "--window-size=1400,1200" ]
      }
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'lancaster-online-paywall-remover',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
