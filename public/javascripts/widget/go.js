$(document).ready(function(){
  $("#calendar_widget").addClass("yui-skin-sam");
  
  var calendar = new YAHOO.widget.Calendar("calendar_widget");
  
  $.getJSON("http://calendar.valentinmihov.com/~valo/2009/11.json?callback=?", function(data) {
    $.each(data["days"], function(i, date) {
      parsedDate = date.split('-');
      mdyDate = parsedDate[1] + "/" + parsedDate[2] + "/" + parsedDate[0];
      calendar.addRenderer(mdyDate, calendar.renderBodyCellRestricted);
    });
    
    calendar.render();
    $("#calendar").append("<em>GitHub Calendar powered by <a href='http://calendar.valentinmihov.com'>valo's cal</a></em>");
  });
});
