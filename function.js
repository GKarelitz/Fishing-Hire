var location, date, people, type, time;

$(document).ready(function() {

	parseInit();
	getCharters();

});

// DATEPICKER FUNCTION //
$('.input-group.date').datepicker({
    	autoclose: true
});

// ON MAIN BUTTON CLICK // 
$( "#mainbtn" ).bind( "click", function(event, ui) {
  		getInput();
});

// INITIALIZE PARSE //
function parseInit() {
    Parse.initialize("4UJCqqCl5La3x2vx5qeX9fEYUk0AWMnQF1zHrhUm", "HjCqDWZiErvNu62pTuoUlcygfOAVFcLQUokY55Ds");
    console.log("Parse Init");   
}

// GET INPUT INFORMATION //
function getInput() {

	var location = $( "#wherefield" ).val();
	var date = $( "#datefield" ).val();
	var people = $( "#peoplefield" ).val();
	var type = $( "#typefield" ).val();
}

function displayCard(boatName, rating, location, boatImage, id) {
	console.log(id);
	$( "#section2 .container" ).append( "<div class='col-md-4'>" );
	$( "#section2 .container .col-md-4" ).last().append( "<div id='boatcard'>" );
	$( "#section2 .container .col-md-4 #boatcard" ).last().append( "<img src=" + boatImage + ">" );
	$( "#section2 .container .col-md-4 #boatcard" ).last().append( "<div class='boatrating'>" + rating + "</div>" );
	$( "#section2 .container .col-md-4 #boatcard" ).last().append( "<div class='boattitle'>" + boatName + "</div>" );
	$( "#section2 .container .col-md-4 #boatcard" ).last().append( "<div class='boatlocation'>" + location + "</div>" );
	$( "#section2 .container .col-md-4 #boatcard" ).last().append( "<div class='row' id='boatrow'>" );
	$( "#section2 .container .col-md-4 #boatcard #boatrow" ).last().append( "<div class='col-md-6'>" );
	$( "#section2 .container .col-md-4 #boatcard #boatrow .col-md-6" ).last().append( "<select class='form-control input-lg' id='timefield' ><option>Full Day</option><option>Half Day (AM)</option><option>Half Day (PM)</option></select> ");
	$( "#section2 .container .col-md-4 #boatcard #boatrow" ).last().append( "<div class='col-md-6'>" );
	$( "#section2 .container .col-md-4 #boatcard #boatrow .col-md-6" ).last().append( "	<button type='button' id='mainbtn' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Reserve</button>");

}

function getCharters() {
    
    var Charters = Parse.Object.extend("Charters");
    var query = new Parse.Query(Charters);
    query.find({
      success: function(results) {
        //alert("Successfully retrieved " + results.length + " scores.");
      	console.log(results.length);
        // Do something with the returned Parse.Object values
        	for (var i = 0; i < results.length; i++) { 

          		var object = results[i];

          		var boatName = object.get('boatName');
          		var rating = object.get('rating');
          		var location = object.get('location');
          		var boatImage = object.get('boatImage').url();
          		var id = object.id;

          		displayCard(boatName, rating, location, boatImage, id);
        	}
         
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });     
}
