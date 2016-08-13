// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  //framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //192.168.1.2

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['RunThis.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  onPrepare:function(){
	  browser.ignoreSynchronization = true;
	  browser.get("http://localhost/orangeHrm/symfony/web/index.php/auth/login");
	 
  }};
