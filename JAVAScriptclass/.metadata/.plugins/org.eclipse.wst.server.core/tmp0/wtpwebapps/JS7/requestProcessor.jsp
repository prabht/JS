<% 
String un=request.getParameter("username");
String pw=request.getParameter("pass");
if(un.equalsIgnoreCase("administrator")&&pw.equalsIgnoreCase("admin"))
	out.println("you hav logged in as Administrator");
else
	out.println("You are not logged in as Administrator");

%>