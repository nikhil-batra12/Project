package Controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.struts.actions.DispatchAction;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionForward;
import org.json.JSONArray;
import Service.ServiceProvider;
import Service.ServiceProviderImpl;

public class LinkAction extends DispatchAction{
	  
	public ActionForward home(ActionMapping mapping, ActionForm  form,
	            HttpServletRequest request, HttpServletResponse response)
	            throws Exception {
		
	        return mapping.findForward("Home");
	    }
	
	public ActionForward hotel(ActionMapping mapping, ActionForm  form,
            HttpServletRequest request, HttpServletResponse response) throws IOException
           {
		
			
					ServiceProvider service=new ServiceProviderImpl();
					JSONArray hotelJsonArray;
					HttpSession session=request.getSession();
					String userid=session.getAttribute("userid").toString();
					PrintWriter out=response.getWriter();
					hotelJsonArray=service.fetchHotels(userid);
					out.print(hotelJsonArray.toString());
			  
			return null;
    }
	
	public ActionForward myfavourite(ActionMapping mapping, ActionForm  form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        
					ServiceProvider service=new ServiceProviderImpl();
					JSONArray favHotelJsonArray;
					HttpSession session=request.getSession();
					String userid=session.getAttribute("userid").toString();
					PrintWriter out=response.getWriter();
					favHotelJsonArray=service.fetchFavourite(userid);
					out.print(favHotelJsonArray.toString());
					return null;
    }
	
	public ActionForward booking(ActionMapping mapping, ActionForm  form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
					HttpSession session=request.getSession();
					String userid=session.getAttribute("userid").toString();
					ServiceProvider service=new ServiceProviderImpl();
					JSONArray bookingArray,selectHotelArray;
					JSONArray wrapJSON=new JSONArray();
					selectHotelArray=service.selectHotelList();
					bookingArray=service.fetchBooking(userid);
					wrapJSON.put(bookingArray);
					wrapJSON.put(selectHotelArray);
					PrintWriter out=response.getWriter();
					out.print(wrapJSON.toString());
					return null;
    }
	
	public ActionForward signout(ActionMapping mapping, ActionForm  form,
            HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        	HttpSession session=request.getSession();
        	session.invalidate();
        	return new ActionForward("LoginPage.jsp", true);
    }
}
