$(function() {
     $("#birth-date").datepicker({
    	 changeMonth: true,
    	 changeYear:true,
    	 dateFormat: "dd-mm-yy"
         //numberOfMonths: 2
     });
     $("#register").button().click(function(){
    	 alert("Registered " + $("#name").val() + " born on "+$("#birth-date").val());
     });
});
