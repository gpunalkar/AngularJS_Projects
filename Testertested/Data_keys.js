var Data=[
          {   ReunTest:"Y",
        	  Command: "Navigate",
        	  key: "http://localhost/orangehrm/symfony/web/index.php/pim/viewEmployeeList",
        	  value:"1"     	  
        	  
          } ,          
          {   ReunTest:"Y",
        	  Command: "IDSendKey",
        	  key: "#txtUsername",
        	  value:"admin"     	  
        	  
          },          
          {   ReunTest:"Y",
        	  Command: "IDSendKey",
        	  key: "#txtPassword",
        	  value:"admin"     	  
        	  
          } ,          
          {   ReunTest:"Y",
        	  Command: "NameClick",
        	  key: "Submit",
        	  value:""     	  
        	  
          } ,          
          {   ReunTest:"Y",
        	  Command: "CheckTitle",
        	  key: "",
        	  value:"Login"     	  
        	  
          } 
          
          
          ]


function Execute(Command, key, value)
{
	
	var result="Pass"
	switch(Command)
	{
			case "Navigate": 
				browser.get(key);
	break
			case "IDSendKey":
				$(key).sendKeys(value)
				break
				case "CheckTitle":
				browser.getTitle().then(function(text)
				{
					if(text==value)
						{
						result= "Pass"
						}
					else
						{
						 result = "Fail";
						 console.log("Fail2222")
						 
						 
						}
				}		
				
				)
				
					break
				
				
			case "NameClick":
				element(by.name(key)).click();		
				
				
	} 
	
	return result;
	

}

var Report= function()
{
		this.key="";
		this.Command="";
		this.value="";
		this.ReunTest="";
		this.Status="";
		
}

var ReportList=[];


for(var i=0;i<Data.length;i++)
{
	var obj = new Report();
	obj.Command=Data[i].Command;
	obj.key=Data[i].key;
	obj.value=Data[i].value;	
	obj.ReunTest=Data[i].ReunTest;
	
	if(Data[i].ReunTest=="Y")
		{
			
		obj.Status=	Execute(Data[i].Command,Data[i].key,Data[i].value)
		}
	
	ReportList.push(obj);
	
}

for(var j=0; j<ReportList.length;j++)
	{
	console.log(ReportList[j].Status)
	}
browser.sleep(10000)


/*

browser.get("http://localhost/orangehrm/symfony/web/index.php/pim/viewEmployeeList");
var e = browser.findElement(by.id("txtUsername"));
e.sendKeys("admin");
e= browser.findElement(by.id("txtPassword"));
e.sendKeys("admin");
e= browser.findElement(By.name("Submit"));
e.click();
browser.sleep(10000);
browser.executeScript('window.scrollTo(0,200);')
browser.executeScript('alert("a")')
browser.sleep(10000)
*/