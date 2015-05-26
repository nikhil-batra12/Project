package Service;

import java.sql.ResultSet;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

import Model.*;


public interface ServiceProvider {
	public boolean checkUserService(LoginForm loginForm);
	public JSONArray fetchHotels(String userid);
	public JSONObject insertFavourite(String hotelId,String userid);
	public JSONObject deleteFavourite(String hotelId,String userid);
	public JSONArray fetchFavourite(String userid);
	public List<String> fetchFavHotel(String userid);
	public JSONArray selectHotelList();
	public ResultSet allHotelInfo();
	public JSONObject costJSON();
	public int insertBooking(BookingForm bookingInfo);
	public JSONArray fetchBooking(String userid);
	public int checkBookingAvailability(BookingForm bookingInfo);
	//public boolean SaveUserService(User user);
	//public boolean checkAvailableService(LoginData data);
}
