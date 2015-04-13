<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

Info provided by your number servlet.
<ul>
 <c:forEach var="number" items="${nums}" >
    <li>${number}</li>
  </c:forEach>
</ul>