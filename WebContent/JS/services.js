var app=angular.module('MyServices',[]);

app.service('checkUser',['$http',function($http){
	var loginStatus="";
	
	var authenticate=function(userData){
		 
		$.ajax({
			url : "login.do",
			type : "get",
			data : userData,
			 async: false,
			 success: function(data)          
	         {   
				
				 loginStatus=data;   
		
	         }
		});
		
		return loginStatus;
		};
		return {
		    authenticate: authenticate
		};
}]);

app.service('fetchData',['$http',function($http){
	var Data="";
	
	var getData=function(userData,urlToSend){
		 
		$.ajax({
			url : urlToSend,
			type : "get",
			data:userData,
			async: false,
			success: function(data)          
	         {   
				
				Data=JSON.parse(data);
						
	         }
		});
		
		return Data;
		};
		return {
		    getData: getData
		};
}]);



