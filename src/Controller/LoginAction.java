package Controller;

import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import Model.LoginForm;
import Service.ServiceProvider;
import Service.ServiceProviderImpl;


public class LoginAction extends org.apache.struts.action.Action{
	public ActionForward execute(ActionMapping mapping, ActionForm form,
			HttpServletRequest request,	HttpServletResponse response) throws 
			Exception {
				boolean status=true;
				LoginForm user=new LoginForm();
				user.setUsername(request.getParameter("username"));
				user.setPassword(request.getParameter("password"));
				ServiceProvider service=new ServiceProviderImpl();
				HttpSession session=request.getSession();
				status=service.checkUserService(user);
				session.setAttribute("userid",user.getUsername());
				session.setAttribute("firstName",user.getFirstName());
				PrintWriter out=response.getWriter();
				
				if(status){
						out.print("Success");
					}
				
				else{	
					out.print("Failure");
					}
			
				
				 out.close();
				 return null;
		}
}
