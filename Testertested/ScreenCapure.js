module.exports ={
	 ScreenImage : function(path)
		{
			browser.takeScreenshot()
			.then(function (png) {
				var fs = require('fs');
				 var stream = fs.createWriteStream(path);
				        stream.write(new Buffer(png, 'base64'));
				        stream.end();
				       

		}
}

