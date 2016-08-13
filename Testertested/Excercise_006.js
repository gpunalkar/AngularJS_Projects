describe("verify Page Title",function()
		{
	it("Should verify Page Title", function()
			{
				
			browser.get("http://localhost/hrm/Example26.html");
		
			browser.getTitle()
		 .then(
			function(tilte)	 
			{
				 if(title=="Login")
				{
					 console.log("Title Matched " + title)
				}
				 else
					 {
					 console.log("Title not Matched " + title)
					 }
			},
			function(er)
			{
				console.log(er);
			}
		 
		 )
		
		; //).toContain('Upwork - Hire Freelancers & Get Freelance Jobs Online');
		
		 
		
		
			});
		});