/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.39
 * Generated at: 2017-11-15 12:43:38 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class ques7_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"ISO-8859-1\">\r\n");
      out.write("<title>Insert title here</title>\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t<table>\r\n");
      out.write("\t\t<tbody>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<th>Personal Details</th>\r\n");
      out.write("\t\t\t\t<th><button id=\"1\">Get Personal Details</button></th>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td>First Name:</td>\r\n");
      out.write("\t\t\t\t<td><input type=\"text\" id=\"fname\" /></td>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td>Last Name:</td>\r\n");
      out.write("\t\t\t\t<td><input type=\"text\" id=\"lname\" /></td>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t<td>City:</td>\r\n");
      out.write("\t\t\t\t<td><input type=\"text\" id=\"city\" /></td>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td>Contact:</td>\r\n");
      out.write("\t\t\t\t<td><input type=\"text\" id=\"contact\" /></td>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t</tbody>\r\n");
      out.write("\t</table>\r\n");
      out.write("\r\n");
      out.write("\t<br>\r\n");
      out.write("\t<br>\r\n");
      out.write("\r\n");
      out.write("\t<table>\r\n");
      out.write("\t\t<tbody>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<th>Project Details</th>\r\n");
      out.write("\t\t\t\t<th><button id=\"2\">Get Project Details</button></th>\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td>Project Id:</td>\r\n");
      out.write("\t\t\t\t<td><input type=\"text\" id=\"pid\" /></td>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\t\t\t<tr>\r\n");
      out.write("\t\t\t\t<td>Project Location:</td>\r\n");
      out.write("\t\t\t\t<td><input type=\"text\" id=\"pname\" /></td>\r\n");
      out.write("\r\n");
      out.write("\t\t\t</tr>\r\n");
      out.write("\r\n");
      out.write("\t\t</tbody>\r\n");
      out.write("\t</table>\r\n");
      out.write("\t<script\r\n");
      out.write("\t\tsrc=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\r\n");
      out.write("\t<script>\r\n");
      out.write("\t\t$(\"#1\")\r\n");
      out.write("\t\t\t\t.click(\r\n");
      out.write("\t\t\t\t\t\tfunction() {\r\n");
      out.write("\t\t\t\t\t\t\tvar url = \"XML.jsp\";\r\n");
      out.write("\t\t\t\t\t\t\t$\r\n");
      out.write("\t\t\t\t\t\t\t\t\t.ajax({\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\ttype : \"GET\",\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\turl : url,\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\tdatatype : \"XML\",\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\tsuccess : function(response) {\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tconsole.log(response);\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t$(\"#fname\")\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t.val(\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresponse\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.getElementsByTagName(\"fname\")[0].childNodes[0].textContent);\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t$(\"#lname\")\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t.val(\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresponse\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.getElementsByTagName(\"lname\")[0].childNodes[0].textContent);\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t$(\"#city\")\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t.val(\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresponse\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.getElementsByTagName(\"city\")[0].childNodes[0].textContent);\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t$(\"#contact\")\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t.val(\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tresponse\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t.getElementsByTagName(\"contact\")[0].childNodes[0].textContent);\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t\t\t\t\t})\r\n");
      out.write("\t\t\t\t\t\t})\r\n");
      out.write("\r\n");
      out.write("\t\t$(\"#2\").click(function() {\r\n");
      out.write("\t\t\tvar url = \"JSON.jsp\";\r\n");
      out.write("\t\t\t$.ajax({\r\n");
      out.write("\t\t\t\ttype : \"GET\",\r\n");
      out.write("\t\t\t\turl : url,\r\n");
      out.write("\t\t\t\tdatatype : \"XML\",\r\n");
      out.write("\t\t\t\tsuccess : function (response) {\r\n");
      out.write("\t\t\t\t\tvar obj = JSON.parse(response);\r\n");
      out.write("\t\t\t\t\tconsole.log(obj);\r\n");
      out.write("\t\t\t\t\t$(\"#pid\").val(obj.pid);\r\n");
      out.write("\t\t\t\t\t$(\"#pname\").val(obj.pname);\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\t\t})\r\n");
      out.write("\t\t})\r\n");
      out.write("\t</script>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
