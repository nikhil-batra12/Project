<style>
	div{
		color:white
	}
	a{
		background-color:white!important;
		color:black;
	}
</style>
	<div class="row">
		
			<ol >
				<li data-ng-repeat="lesson in lessonData.body.unit.lessons">
					
					<a href="#/book/ML1_A/lesson/{{lesson['section-id']}}" class="btn btn-primary">{{lesson.name}}</a>
				</li>
			</ol>
	</div>
	<div class="row">
		<ol >
				
				<li data-ng-repeat="activity in activityData.body.lesson.activities">
						<a href="#/book/ML1_A/Activity/{{activity['section-id']}}" class="btn btn-primary">
							<span ng-show='activity.status=="not-taken"'>Start</span>
							<span ng-show='activity.status=="Completed"'>Re-do</span>
					</a>
				</li>
			</ol>
	</div>

<!-- <div nav-bar></div>
<div class="col-xs-12" id="BookingHistoryContainer" data-ng-init="fetchFavourites();">
	 <h1>Booking History</h1>
	 <div class="col-xs-offset-1 col-xs-10">
	 	<div class="col-xs-offset-3"><h1>No booking History Available</h1></div>
	 	<div ng-init="fetchFavourites()">
				<table class="table table-condensed table-bordered table-responsive">
					<tr class="tableHeading">
						<td>Booking Id</td>
						<td>Hotel Id</td>
						<td>Hotel Name</td>
						<td>Booking Date</td>
						<td>Event Date</td>
						<td>Time Slot</td>
						<td>Persons</td>
						<td>Cost</td>
					</tr>
					
				 
					<tr data-ng-repeat="booking in bookings" class="bookingData">
						<td>{{booking.id}}</td>	
						<td>{{booking.hotelid}}</td>
						<td>{{booking.hotelName}}</td>	
						<td>{{booking.bookingDate}}</td>	
						<td>{{booking.eventDate}}</td>
						<td>{{booking.timeSlot}}</td>
						<td>{{booking.persons}}</td>
						<td>{{booking.cost}}</td>
					</tr>				 
				
				</table>
		</div>
	
	</div>
</div>


<div class="col-xs-offset-5 col-xs-4 control-label" >
<button type="submit" class="btn btn-success pull-left" id="MainBookButton">Book Now</button>
</div>

<div class="cols-xs-12 tab-pane fade in row" id="Booking-Container">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
				
					<h1>Booking Form</h1><hr/>
					<form class="form-horizontal" id="BookingForm" onSubmit="return validate()" method="post" action="Book.do"  >
						<div class="form-group">
							<label for="Hotel" class="col-xs-offset-1 col-xs-3 control-label">Select Hotel</label>
							<div class="col-xs-5" >
								<select class="form-control" name="hotelInfo" id="hotelSelectList">
									  
											<option data-ng-repeat="options in selectList">{{options.name }}</option>									 
									 
								</select>
								<span id="OverallAvailable" class="error-message">Booking is available</span>
							</div>
						</div>
						
						<div class="form-group">
							<label for="bookingDate" class="col-xs-offset-1 col-xs-3 control-label">Booking Date</label>
							<div class="col-xs-5">
								<input type="text" class="form-control" readonly="readonly" id="bookingDate" name="bookingDate"/>	
							</div>
						</div>
						
						<div class="form-group">
						<label for="DateTime" class="col-xs-offset-1 col-xs-3 control-label">Select Date</label>
						<div class="col-xs-5">
                			<div class='input-group date' id='datepicker1'>
			                    <input type='text' id="datePickerText" name="eventDate" class="form-control" placeholder="Select Date" />
			                    <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
			                    </span>
			                    
			                    
                			</div>
                			<span class="error-message" id="date-error-message">Date is required</span>
                			<span class="error-message" id="date-unavalaible-message">Booking not available. Please select other date.</span>
                			</div>
            			</div>
						<div class="form-group">
							<label for="Time Slot" class="col-xs-offset-1 col-xs-3 control-label">Time Slot</label>
							<div class="col-xs-5">
								<select class="form-control" id="timeSlot" name="timeSlot">
									<option>Slot 1(10am to 2pm)</option>
									<option>Slot 2(3pm to 7pm)</option>
									<option>Slot 3(8pm to 12am)</option>
									<option>Full day(12pm to 10pm)</option>
								</select>

							</div>
							<span class="error-message" id="timeslot-full-message">Time slot not available. Please select some other time slot.</span>
                			<span class="error-message" id="timeslot-unavalaible-message">Full day booking not available.</span>
                			
						</div>
						<div class="form-group">
							<label for="persons" class="col-xs-offset-1 col-xs-3 control-label">Number of persons</label>
							<div class="col-xs-5">
								<input type="text" class="form-control" placeholder="Enter Number of Persons" id="persons" name="persons"/>
								<span class="error-message" id="person-error-message">Persons is required</span>
							</div>
						</div>
						<div class="form-group">
							<label for="cost" class="col-xs-offset-1 col-xs-3 control-label">Total Cost</label>
							<div class="col-xs-5">
								<input type="text" class="form-control" readonly="readonly" id="cost" name="cost"/>
								
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-offset-4 col-md-offset-4 col-md-5 col-xs-8 control-label" >
								<button type="submit" class="btn btn-success pull-left">Book Now</button>
								<button style="margin-left:5px;" type="button" class="btn btn-warning pull-left" id="CheckAvailable">Check Availability</button>
								<button style="margin-left:5px;" type="button" class="btn btn-danger pull-left" id="ClearButton">Clear</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	

  	
   
    <script type="text/javascript">
    $(function () {
    	$(document).ready(function() {
    	    $('#datepicker1').datepicker({
    	    	format: 'dd-mm-yyyy'
    	    });
    
    	});
    });
    </script>
  -->