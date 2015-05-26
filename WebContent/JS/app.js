var app=angular.module("HotelApp", ['ngRoute','MyDirectives','MyController','MyFactory','ui.router','angular-data.DSCacheFactory']);
 

angular.module('HotelApp').config(['$stateProvider','$urlRouterProvider',
  function($stateProvider,$urlRouterProvider) {
	 $stateProvider
     .state('login', {
   	  	url:"/login",
        templateProvider:['templateFactory',function(templateFactory) {
            var templateName = "login-tile.jsp";
            return templateFactory.getTemplate(templateName);
        }],
        controller: 'loginController'
       
    })
    .state('home', {
   	  	url:"/home",
        templateProvider:['templateFactory',function(templateFactory) {
            var templateName = "home-tile.jsp";
            return templateFactory.getTemplate(templateName);
        }]
               
    })  
    .state('hotel', {
   	  	url:"/hotel",
        templateProvider:['templateFactory',function(templateFactory) {
            var templateName = "hotel-tile.jsp";
            return templateFactory.getTemplate(templateName);
        }],
        controller: 'hotelController'    
    })      
    .state('favourite', {
   	  	url:"/favourite",
   	  	templateProvider:['templateFactory',function(templateFactory) {
            var templateName = "favourite-tile.jsp";
            return templateFactory.getTemplate(templateName);
        }],
        controller: 'favouriteController'    
    }) 
   .state('booking', {
   	  	url:"/booking",
   	  	templateProvider:['templateFactory',function(templateFactory) {
            var templateName = "booking-tile.jsp";
            return templateFactory.getTemplate(templateName);
        }],
        controller: 'BookingController'    
    })
   
  
        
  /*      
    })
    .when('/compose', {
        templateUrl: 'compose.jsp',
        controller: 'composeController',
        resolve:{
        	app:function(){
        		var loggedIn = true;
        		return loggedIn; 
        	}
        }
    })
    .when('/contacts', {
        templateUrl: 'contacts.jsp'
        //controller: 'composeController',
        resolve:{
        	app:function(){
        		var loggedIn = true;
        		return loggedIn; 
        	}
        }
    })
    */
    $urlRouterProvider.otherwise('/login')
}]);

/*angular.module('HotelApp').config(['$routeProvider',
function($routeProvider) {
  $routeProvider
    .when('/login', {
      templateUrl:"./Partials/login-tile.jsp",
      controller: 'loginController'
      }    
     
  )
  .when('/home', {
      templateUrl:"./Partials/home-tile.jsp",
      
      }    
   )
  .when('/hotel', {
      templateUrl:"./Partials/hotel-tile.jsp",
      controller: 'hotelController'  
      }    
   )
  .when('/favourite', {
      templateUrl:"./Partials/favourite-tile.jsp",
      controller: 'favouriteController'    
      }    
   )
  .when('/booking', {
      templateUrl:"./Partials/booking-tile.jsp",
      controller: 'BookingController' 
      }    
   )

  .otherwise({
      redirectTo: '/login'
  });
}]);*/


