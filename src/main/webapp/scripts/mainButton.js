//Example buttons
var uiDemo = {}; // To avoid name conflicts

uiDemo.styleButtons = function() {
  $("#button-div .style-test").button();
  $("#checkboxes").buttonset();
  $("#radio").buttonset();
  $("#test").button({disabled:"true"});
};


$(function() {
    $("#button-styler-button").click(uiDemo.styleButtons);
});
