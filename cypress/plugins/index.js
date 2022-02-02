const path = require('path');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = ( on, config ) => {
  on( 'before:browser:launch', ( browser, launchOptions ) => {
    // supply the absolute path to an unpacked extension's folder
    // NOTE: extensions cannot be loaded in headless Chrome
    launchOptions.extensions.push( path.resolve( __dirname, '../../' ) );

    return launchOptions;
  } );
}
