var app=angular.module('MyController',['MyServices', 'mgcrea.ngStrap']);

/* Login controller - Performs binding, data rendering on home page. */
app.controller('loginController', ['$scope', 'checkUser',function ($scope,checkUser) {
	$scope.modal = {
			  "title": "Title",
			  "content": "Hello Modal<br />This is a multiline message!"
			};
	$scope.login=function(){
		
		var userDetails=jQuery("#loginForm").serialize();
		var data=checkUser.authenticate(userDetails);
		
		if(data=="Success"){
				window.location.href="#/home";
			}
		
		else{
				$("#loginErrorMsg").text("Invalid Username or Password");
			}
	
	};
}]);

app.controller('hotelController',['$scope', 'fetchData',function ($scope,fetchData) {
	$scope.fetchHotels=function(){
		var url="Link.do?method=hotel";
		var userData="";
		$scope.hotelData=fetchData.getData(userData,url);
	};
	
	/*$scope.fav=function(id){
		var value=$("#"+id).text();
		
		var userData="";
		
		if(value==="Add to Favourites")
			{
				url="Favorite.do?hotelId="+id+"&method=Insert";
				$('#'+id).text("Remove from Favourites");
				$('#'+id).addClass("glyphicon glyphicon-heart");
			}
		else
			{
				url="Favorite.do?hotelId="+id+"&method=Delete";
				$('#'+id).text("Add to Favourites");
			}
		
		$scope.hotelData=fetchData.getData(userData,url);
	};
	*/
}]);

app.controller('favouriteController',['$scope', 'fetchData',function ($scope,fetchData) {
	$scope.fetchFavourites=function(id){
		var userData="";
		var	url="Link.do?method=myfavourite";
		$scope.favData=fetchData.getData(userData,url);
	};
	
	$scope.test=function(hotel,name){
		alert(hotel.name);
		
	};
	
}]);	
	app.controller('BookingController',['$scope', 'fetchData',function ($scope,fetchData) {
		$scope.fetchFavourites=function(){
			var userData="";
			var	url="Link.do?method=booking";
			var Data=fetchData.getData(userData,url);
			$scope.bookings=Data[0];
			$scope.selectList=Data[1];
			
		};
		var data='{'+
		  '"status": {'+
				'"code": "success",'+
				'"message": "OK"'+
			  '},'+
			  '"body": {'+
				'"unit": {'+
			  	'"name": "Unit 1: Hello",'+
			  	'"section-id": 719370220,'+
			  	'"description": "",'+
			  	'"bg-img": "",'+
			  	'"start-resume-url": "#/book/ML1_A/lesson/754711113",'+
			  	'"lessons": ['+
			    	'{'+
			      	'"name": "Lesson 1: Vocabulary",'+
			      	'"section-id": 754711113,'+
			      	'"serial-number": 1,'+
			      	'"possible-score": 55,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'},'+
			    	'{'+
			      	'"name": "Lesson 2: Grammar",'+
			      	'"section-id": 1159778224,'+
			      	'"serial-number": 2,'+
			      	'"possible-score": 33,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'},'+
			    	'{'+
			      	'"name": "Lesson 3: Grammar",'+
			      	'"section-id": 649596039,'+
			      	'"serial-number": 3,'+
			      	'"possible-score": 37,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'},'+
			    	'{'+
			      	'"name": "Lesson 4: Grammar",'+
			      	'"section-id": 1040414804,'+
			      	'"serial-number": 4,'+
			      	'"possible-score": 30,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'},'+
			    	'{'+
			      	'"name": "Lesson 5: Grammar",'+
			      	'"section-id": 1776940106,'+
			      	'"serial-number": 5,'+
			      	'"possible-score": 34,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'},'+
			    	'{'+
			      	'"name": "Lesson 6: Listening",'+
			      	'"section-id": 1712730868,'+
			      	'"serial-number": 6,'+
			      	'"possible-score": 17,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'},'+
			    	'{'+
			      	'"name": "Lesson 7: Reading and Writing",'+
			      	'"section-id": 108942537,'+
			      	'"serial-number": 7,'+
			      	'"possible-score": 44,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'},'+
			    	'{'+
			      	'"name": "Lesson 8: Video",'+
			      	'"section-id": 1151635742,'+
			      	'"serial-number": 8,'+
			      	'"possible-score": 22,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'},'+
			    	'{'+
			      	'"name": "Lesson 9: Review",'+
			      	'"section-id": 396252702,'+
			      	'"serial-number": 9,'+
			      	'"possible-score": 7,'+
			      	'"student-score": 0,'+
			      	'"status": "completed"'+
			    	'}'+
			  	'],'+
			  	'"all-additional-activities": ['+
			    	'{'+
			      	'"name": "Explore (reading, listening, video)",'+
			      	'"section-id": 964930099,'+
			      	'"launch-url": "#/book/ML1_A/activity/964930099"'+
			    	'}'+
			  	'],'+
			  	'"unit-test": ['+
			    	'{'+
			      	'"name": "Unit Quiz",'+
			      	'"section-id": 455069779,'+
			      	'"launch-url": "#/book/ML1_A/activity/455069779",'+
			      	'"possible-score": 16,'+
			      	'"student-score": 1,'+
			      	'"status": "completed"'+
			    	'}'+
			  	']'+
				'}'+
			  '}'+
			'}';
$scope.lessonData=JSON.parse(data);
var data1='{'+
		  '"status": {'+
				'"code": "success",'+
				'"message": "OK"'+
			  '},'+
			  '"body": {'+
				'"lesson": {'+
			  	'"name": "Lesson 1: Vocabulary",'+
			  	'"section-id": 754711113,'+
			  	'"serial-number": 1,'+
			  	'"description": "",'+
			  	'"unit-bg-img": "",'+
			  	'"activities-count": 8,'+
			  	'"status": "COMPLETED",'+
			  	'"start-resume-url": "#/book/ML1_A/activity/578109287",'+
			  	'"next-lesson-url": "#/book/ML1_A/lesson/1159778224",'+
			  	'"activities": ['+
			    	'{'+
			      	'"name": "Activity 1",'+
			      	'"section-id": 578109287,'+
			      	'"possible-score": 1,'+
			      	'"student-score": "",'+
			      	'"status": "not-taken"'+
			    	'},'+
			    	'{'+
			      	'"name": "Activity 2",'+
			      	'"section-id": 420575430,'+
			      	'"possible-score": 10,'+
			      	'"student-score": "",'+
			      	'"status": "not-taken"'+
			    	'},'+
			    	'{'+
			      	'"name": "Activity 3",'+
			      	'"section-id": 331473314,'+
			      	'"possible-score": 10,'+
			      	'"student-score": "",'+
			      	'"status": "not-taken"'+
			    	'},'+
			    	'{'+
			      	'"name": "Activity 4",'+
			      	'"section-id": 241641839,'+
			      	'"possible-score": 7,'+
			      	'"student-score": "",'+
			      	'"status": "not-taken"'+
			    	'},'+
			    	'{'+
			      	'"name": "Activity 5",'+
			      	'"section-id": 1399386588,'+
			      	'"possible-score": 7,'+
			      	'"student-score": "",'+
			      	'"status": "not-taken"'+
			    	'},'+
			    	'{'+
			      	'"name": "Activity 6",'+
			      	'"section-id": 745355720,'+
			      	'"possible-score": 10,'+
			      	'"student-score": "",'+
			      	'"status": "not-taken"'+
			    	'},'+
			    	'{'+
			      	'"name": "Activity 7",'+
			      	'"section-id": 1546764990,'+
			      	'"possible-score": 1,'+
			      	'"student-score": "",'+
			      	'"status": "not-taken"'+
			    	'},'+
			    	'{'+
			      	'"name": "Activity 8",'+
			      	'"section-id": 1331479312,'+
			      	'"possible-score": 9,'+
			      	'"student-score": "",'+
			      	'"status": "Completed"'+
			    	'}'+
			  	']'+
				'}'+
			  '}'+
			  '}';
$scope.activityData=JSON.parse(data1);
}]);
	
	