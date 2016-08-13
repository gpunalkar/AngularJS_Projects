// An example configuration file.
exports.config = {
  directConnect: true,
  
  /*plugins: [{
	  path: 'node_modules/protractor/plugins/accessibility',
      chromeA11YDevTools: {
        treatWarningsAsFailures: true
      }
      package: 'protractor-accessibility-plugin'
    }]*/

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',
   seleniumAddress: 'http://127.0.01:4444/wd/hub',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
   //
 	//specs: ['Excercise_026_Jasmin_Define_variable.js'],
   //	specs: ['Excercise_027_Jasmin_unDefine_variable.js'],
  	//specs: ['Excercise_028_Jasmin_checkForfalsy.js'],
  	//specs: ['Excercise_029_Jasmin_checkFortrue.js'],
   
   
   specs: ['ActionClass.js'],
   
   // specs: ['Excercise_030_Jasmin_toBeGreater.js'],
   //orangeHRMbyjavascript.js
  // specs: ['orangeHRMbyjavascript.js'],
  // specs: ['Excercise_031_toBeLessThan.js'],
 // specs: ['Excercise_032_GetJavaScriptObject.js'],
  // specs: ['Excercise_033_matchersUtil.js'],
  // specs: ['Excercise_034_getAngularVersion.js'],
 //  specs: ['Excercise_035_ngRepeat.js'],
   
   //Excercise_035_ngRepeat.js
   //Excercise_034_getAngularVersion.js
   //Excercise_032_GetJavaScriptObject.js
   //Excercise_032_matchersUtil.js
   //Excercise_031_toBeLessThan.js
  	//Excercise_030_Jasmin_toBeGreater.js
  //Excercise_029_Jasmin_checkFortrue.js	
  	// Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  
	
  onPrepare:function(){
	  browser.ignoreSynchronization = true;
	  
  }
};
