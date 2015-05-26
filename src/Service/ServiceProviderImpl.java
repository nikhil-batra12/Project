package Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import Dao.*;
import Model.*;

public class ServiceProviderImpl implements ServiceProvider {

	
	static UserDao userDao;
	public ServiceProviderImpl(){
		userDao=new UserDaoImpl();
	} 
	public boolean checkUserService(LoginForm loginForm) {
		boolean status=true; 
		status=userDao.checkUser(loginForm);
		return status;
	}
	public JSONArray fetchHotels(String userid){
		 
		
		JSONObject hotelJsonObj;
		JSONArray hotelJsonArray=new JSONArray();
		ResultSet rs=allHotelInfo();
		List<String> favHotelList=fetchFavHotel(userid);
		
		try {
			while(rs.next()){
				hotelJsonObj=new JSONObject();
				hotelJsonObj.put("id",rs.getString("Id"));
				hotelJsonObj.put("name",rs.getString("Name"));
				hotelJsonObj.put("capacity",rs.getInt("Capacity"));
				hotelJsonObj.put("rating",rs.getString("Rating"));
				hotelJsonObj.put("cost",rs.getInt("Cost"));
				hotelJsonObj.put("address",rs.getString("Address"));
				hotelJsonObj.put("contact",rs.getString("Contact"));
				hotelJsonObj.put("imgURL",rs.getString("URL"));
				if(favHotelList.contains(hotelJsonObj.get("id")))
					hotelJsonObj.put("buttonVal","Remove from Favourites");
				else
					hotelJsonObj.put("buttonVal","Add to Favourites");
				hotelJsonArray.put(hotelJsonObj);
			}
		
		} 
		catch (Exception e) {
				e.printStackTrace();
		}
		return hotelJsonArray;
	}
	
	public JSONObject insertFavourite(String hotelId,String userid){
		boolean status=userDao.insertFavourites(hotelId,userid);
		JSONObject JsonStatus=new JSONObject();
		try {
			JsonStatus.put("Status", status);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return JsonStatus;
	}
	
	public JSONObject deleteFavourite(String hotelId,String userid){
		boolean status=userDao.deleteFavourites(hotelId,userid);
		JSONObject JsonStatus=new JSONObject();
		try {
			JsonStatus.put("Status", status);
		} catch (JSONException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return JsonStatus;
	}
	
	public JSONArray fetchFavourite(String userid){
		ResultSet rs=userDao.fetchFavourites(userid);
		JSONObject favHotelJsonObj;
		JSONArray favHotelArray=new JSONArray();
		try {
			while(rs.next()){
				favHotelJsonObj=new JSONObject();				
				favHotelJsonObj.put("id",rs.getString("Id"));
				favHotelJsonObj.put("name",rs.getString("Name"));
				favHotelJsonObj.put("capacity",rs.getInt("Capacity"));
				favHotelJsonObj.put("rating",rs.getString("Rating"));
				favHotelJsonObj.put("cost",rs.getInt("Cost"));
				favHotelJsonObj.put("address",rs.getString("Address"));
				favHotelJsonObj.put("contact",rs.getString("Contact"));
				favHotelJsonObj.put("imgURL",rs.getString("URL"));
				favHotelJsonObj.put("buttonVal","Remove from Favourites");
				favHotelArray.put(favHotelJsonObj);
			}
		} 
		
		catch (Exception e) {
			
		}
		return favHotelArray;	
	}
	
	public List<String> fetchFavHotel(String userid){
		ResultSet rs=userDao.fetchFavHotelName(userid);
		List<String> hotelList = new ArrayList<String>();
	
		try {
			while(rs.next()){
				hotelList.add(rs.getString("hotelId"));
			}
		} 
		
		catch (SQLException e) {
			
		}
		return hotelList;	
	}
	
	public ResultSet allHotelInfo(){
		ResultSet rs=userDao.fetchHotels();
		return rs;
	}
	
	public JSONArray selectHotelList(){
		ResultSet rs=userDao.fetchHotels();
		JSONObject selectHotelObj;
		JSONArray selectHotelArray=new JSONArray();
		
		try {	
			while(rs.next()){
				selectHotelObj=new JSONObject();
				selectHotelObj.put("id",rs.getString("Id"));
				selectHotelObj.put("name",rs.getString("Name"));
				selectHotelArray.put(selectHotelObj);
			}
		}
		catch(Exception e){
			
		}
		return selectHotelArray;
	}
	
	public JSONObject costJSON(){
		ResultSet rs=userDao.fetchHotels();
		JSONObject jsonobj=new JSONObject();

		
		try {	
			while(rs.next()){
		
				jsonobj.put(rs.getString("ID"),rs.getInt("Cost"));
				jsonobj.put("capacity"+rs.getString("Id"), rs.getInt("Capacity"));
			}
					}
		catch(Exception e){
			System.out.println("My exception");
		}
		return jsonobj;
	}
	
	public int insertBooking(BookingForm bookingInfo){
		
		int errorcode=checkBookingAvailability(bookingInfo);
			if(errorcode==400)
				{
					userDao.insertBooking(bookingInfo);
					return errorcode;
				}
			else 
				{
					return errorcode;
				}

			
	}
	public JSONArray fetchBooking(String userid){
		ResultSet rs=userDao.fetchBookingHistory(userid);
		JSONArray bookingArray=new JSONArray();
		JSONObject bookingObject;
		
		List<BookingForm> bookingList = new ArrayList<BookingForm>();
		try {
			while(rs.next()){
				bookingObject=new JSONObject();
				bookingObject.put("id",rs.getInt("BookingId"));
				bookingObject.put("userid",userid);
				bookingObject.put("hotelid",rs.getString("HotelId"));
				bookingObject.put("hotelName",rs.getString("HotelName"));
				bookingObject.put("eventDate",rs.getString("EventDate"));
				bookingObject.put("bookingDate",rs.getString("BookingDate"));
				bookingObject.put("timeSlot",rs.getString("TimeSlot"));
				bookingObject.put("persons",rs.getInt("Persons"));
				bookingObject.put("cost",rs.getFloat("Cost"));
				bookingArray.put(bookingObject);
			}
		}	
		catch(Exception e){
			return null;
		}
			return bookingArray;
			
	}
	
	
	public int checkBookingAvailability(BookingForm bookingInfo){
		ResultSet rs=userDao.bookingAvailability(bookingInfo);
		java.sql.Date eventDateDb,eventDate;
		String timeSlot="Full day(12pm to 10pm)";
		String timeSlot1="Slot 1(10am to 2pm)";
		String timeSlot2="Slot 2(3pm to 7pm)";
		String timeSlot3="Slot 3(8pm to 12am)";
		String timeSlotDb;
		int status=400;
		try{
				while(rs.next()){
					eventDateDb=rs.getDate("EventDate");
					eventDate=bookingInfo.convertDate(bookingInfo.getEventDate());
					timeSlotDb=rs.getString("TimeSlot");
					if((eventDate.toString()).equals(eventDateDb.toString()))
						if(timeSlot.equals(timeSlotDb))
							{
								status=100;
								break;
							}
						else if((bookingInfo.getTimeSlot()).equals(rs.getString("TimeSlot")))
						{
							status=200;
							break;
						}
						else if(bookingInfo.getTimeSlot().equals(timeSlot) && (timeSlotDb.equals(timeSlot1) || timeSlotDb.equals(timeSlot2) || timeSlotDb.equals(timeSlot3)))
						{
							status=300;
							break;
						}
				}
				
			}	
		catch(Exception e){
			
		}
		
		return status; 
	}
}

/*
	@Override
	public boolean SaveUserService(User user) {
		boolean status=false;
		UserDao userDao=new UserDaoImpl();
		status=userDao.saveUser(user);
		return status;
	}
	
	@Override
	public boolean checkAvailableService(LoginData data) {
		boolean status=false;
		UserDao userDao=new UserDaoImpl();
		status=userDao.checkAvailability(data);
		return status;
	}
}
*/