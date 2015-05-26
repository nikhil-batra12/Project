var app=angular.module('MyDirectives',[]);
 
app.directive("appHeader",function(){
	return{
		restrict: "E",
		replace:'true',
		templateUrl:'./header.jsp'	
	};
});

app.directive("appFooter",function(){
	return{
		restrict: "E",
		replace:'true',
		templateUrl:'./footer.jsp'	
	};
});	
app.directive("navBar",function(){
	return{
		restrict:"A",
		templateUrl:'./Partials/Navbar.jsp'
	};
});