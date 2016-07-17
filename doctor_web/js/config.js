  
 app.config(function($routeProvider) {  
    $routeProvider  
	
	 // route for the home page    
        .when('/', {  
        templateUrl: '/index.html',  
       
    })  
  
    // route for the home page    
        .when('/about', {  
        templateUrl: '/about.html',  
       
    })  
  
    // route for the about page    
    .when('/gallery', {  
        templateUrl: '/gallery.html',  
       
    })  
  
    // route for the contact page    
    .when('/contact', {  
        templateUrl: '/contact.html',  
       
    });  
  
});  
  
