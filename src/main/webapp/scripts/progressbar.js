$(function() {
    $("#progressbar-div").progressbar();
    $("#progressbar-button").button().click(function() {
    	  var currentVal = $("#progressbar-div").progressbar("option", "value");
    	  if (currentVal < 100) {
    	    currentVal += 10;
    	    $("#progressbar-div").progressbar("option", "value", currentVal);
    	  }
    });
});
