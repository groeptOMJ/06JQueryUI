var uiDemo = {}; // To avoid name conflicts

uiDemo.showTemp = function(event, ui) {
  $("#temp-display").html(ui.value);
};

$(function() {
    $("#slider-div").slider({ min: -80, max: 80,
                              slide: uiDemo.showTemp });
    $("#submit-temp").button().click(function(){
    	alert("Temp " + $("#temp-display").text() + " has been set.");
    });
});
