var path = require('path');

describe('Test Upload',function(){
	var fileToUpload = 'C:\QuickITDotNet Study Material\Selenium\Selenium Jenkins Tutorial   ANT Maven GIT GITHUB Integration Part 2.aac.error.log.txt';
	

it('should upload file', function() 
		{
	browser.get("https://fileconvoy.com/");
	console.log("Will open the URL");
		});
it('upload file', function() {
  var absolutePath = path.resolve(__dirname, fileToUpload);
  $('input[type="file"]').sendKeys(absolutePath);

  //$('#uploadButton').click();
});
});