<div nav-bar></div>
  
<h1 id="No-fav"></h1>

 
  <div class="container-fluid" data-ng-init="fetchFavourites();">  
<div class="row">
  <div  class="col-xs-10 col-sm-5 col-offset-md-1 col-md-4" data-ng-repeat="hotel in favData">
    
    <div class="thumbnail">
 
      <img data-ng-src="{{hotel.imgURL}} "alt="..." class="hotelImg"/><br>
       <div class="buttonConatiner"><button id={{hotel.id}} class="btn btn-primary fav" > {{hotel.buttonVal}} </button><br/></div>
      <div class="caption">
       
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
