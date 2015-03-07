var location, date, people, type, time;

$(document).ready(function(){

});

// DATEPICKER FUNCTION //
$('.input-group.date').datepicker({
    	autoclose: true
});

// ON MAIN BUTTON CLICK // 
$( "#mainbtn" ).bind( "click", function(event, ui) {
  		getInput();
});


// GET INPUT INFORMATION //
function getInput() {

	var location = $( "#wherefield" ).val();
	var date = $( "#datefield" ).val();
	var people = $( "#peoplefield" ).val();
	var type = $( "#typefield" ).val();

}