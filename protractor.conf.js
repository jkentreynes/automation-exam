 'use strict';
/* eslint no-undef:0 */

exports.config = {

	'framework' : 'jasmine2',

	// The address of a running selenium server.
	'seleniumAddress' : 'http://localhost:4444/wd/hub',

	// The address where our server under test is running

	'baseUrl' : 'https://beta.ginja.co.th/',

	'specs' : [ 'index.spec.js' ],

	// Capabilities to be passed to the webdriver instance.
	'capabilities' : {
		'browserName' : 'chrome'
	},

	'allScriptsTimeout' : 120000,

	// Options to be passed to Jasmine-node.
	'jasmineNodeOpts' : {
		// Use colors in the command line report.
		'showColors'             : true,
		'defaultTimeoutInterval' : 1200000
	},

	// Set the browser's window size
	'onPrepare' : function () {
		var SpecReporter     = require( 'jasmine-spec-reporter' );
		var jasmineReporters = require( 'jasmine-reporters' );
		var dateStamp        = new Date();
		var date = dateStamp.toUTCString().slice( 0, -4 );

		jasmine.getEnv().addReporter( new jasmineReporters.JUnitXmlReporter( {
			'consolidateAll' : false,
			'savePath'       : 'test/testresults',
			'filePrefix'     : ' ' + date
		} ) );

		browser.manage().window().setSize( 1792, 1008 );

		// add jasmine spec reporter
		jasmine.getEnv().addReporter( new SpecReporter( { 'displayStacktrace' : true } ) );
	}
};
