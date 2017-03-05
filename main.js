var jsonError = {
	"errorMotor" : [
		{idError:"0", libError:"בעיית טעינת במנוע", solutionError:"פיתרון חשמלי", imageError:"images/icon.png"},
		{idError:"1", libError:"בעיה עם חגורת התזמון", solutionError:"לשנות את חגורת התזמון", imageError:"images/icon2.png"},
		{idError:"2", libError:"בעיה קירור מאוורר", solutionError:"לשנות את המאוורר", imageError:"images/icon3.png"},
		{idError:"3", libError:"חוסר שמן", solutionError:"להוסיף שמן במהירות", imageError:"images/icon4.png"}		
		]
}
function fctChangeErrorbyRandom() {				
	var randomObj = jsonError.errorMotor[Math.floor(Math.random() * jsonError.errorMotor.length)];

	$("#errorIcon").attr("src",randomObj.imageError);		
	$("#errorTop").html(randomObj.libError);
	$("#solutionTop").html(randomObj.solutionError);		
}
$(document).ready(function () {

	var myVar = setInterval(fctChangeErrorbyRandom, 2000);	
	// On vérifie si le navigateur supporte la géolocalisation
	if(navigator.geolocation) {
    
		function hasPosition(position) {
			// Instanciation
		 	var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),

			 // Ajustage des paramètres
			 myOptions = {
			 	zoom: 15,
			  	center: point,
			  	mapTypeId: google.maps.MapTypeId.ROADMAP 
			 },
			 
			 mapDiv = document.getElementById("mapDiv"),
			 map = new google.maps.Map(mapDiv, myOptions),

			 marker = new google.maps.Marker({
			  position: point,
			  map: map,
			  title: "You are here"
			  });
		}
		navigator.geolocation.getCurrentPosition(hasPosition);   
	}
});