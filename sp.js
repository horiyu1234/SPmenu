function switchmenu() {
var s = document.getElementById("links").style;
	if (s.display == "none"){
	s.display = "inline-block";
	document.getElementById("border1").id="cross1";
	document.getElementById("border2").id="cross2";
	document.getElementById("border3").id="cross3";
	}	
	else{
	s.display = "none";
	document.getElementById("cross1").id ="border1";
	document.getElementById("cross2").id ="border2";
	document.getElementById("cross3").id ="border3";
	}
}

// window.onresize = change_screen;

// function change_screen(){
// 	var elem1 = document.getElementById("contact_info").children[0];
// 	if(window.innerWidth <=`768){
// 		elem1.innerHTML = ""
// 	}
// 	else{

// 	}

// }



	