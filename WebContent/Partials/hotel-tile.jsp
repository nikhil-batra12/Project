<div nav-bar></div>
<h1>Choose from an extensive list of Hotels</h1>

<div class="container-fluid" data-ng-init="fetchHotels();">  
<div class="row">
  <div  class="col-xs-10 col-sm-5 col-offset-md-1 col-md-4" data-ng-repeat="hotel in hotelData">
    
    <div class="thumbnail">
 
      <img data-ng-src="{{hotel.imgURL}} "alt="..." class="hotelImg"/><br>
       <div class="buttonConatiner"><button id={{hotel.id}} class="btn fav" > {{hotel.buttonVal}}</button><br/></div>
      <div class="caption hotelContent">
       
        <h3>{{hotel.name}}</h3>
        
   		   Capacity: {{hotel.capacity}}<br/>
   		   Rating: {{hotel.rating}}<br/>
   		   Cost per person:{{hotel.cost}}<br/>
   		   Address: {{hotel.address}}<br/>
   		   Contact No.:{{hotel.contact}}<br/>
       
      </div>
    </div>
  </div>
  </div>

 
 </div>
   

    

