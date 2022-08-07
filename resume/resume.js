var currStyle = "orange";
var overBackGdColour="DarkOrange";
var overColour="Black";
var	panelBackGdColour = "PaleGoldenRod"
var	panelColour = "Black"
var normalBackGdColour="";
var normalColour="";
var columnBackGdColour="Orange";
var columnColour="Black";
var mainBackGdColour="Wheat";
var	actBackGdColour="Yellow";
var acc = document.getElementsByClassName("accordion");
var i;
var active = "active_orange";
var new_acive = "active_orange";


function switchColour() {
	var col = document.getElementsByClassName("column");
    var body = document.getElementsByTagName("body");
	var act = document.getElementsByClassName(active);
	
    for (i = 0; i < acc.length; i++) {
        var panel = acc[i].nextElementSibling;
        if (panel.style.maxHeight){
            acc[i].classList.remove(active);
            acc[i].classList.add(new_active);
        }
		panel.style.background=panelBackGdColour;
		panel.style.color=panelColour;
    };
	active = new_active;
	for (i = 0; i < body.length; i++) {
		body[i].style.background=mainBackGdColour;
	}	
	for (i = 0; i < col.length; i++) {
		col[i].style.background=columnBackGdColour;
		col[i].style.color=columnColour;
	}
}

function toOrange() {
	currStyle = "Orange";
	overBackGdColour="DarkOrange";
	overColour= "Black";
	panelBackGdColour = "PaleGoldenRod"
	panelColour = "Black"
	columnBackGdColour = "Orange"
	columnColour = "Black"
    mainBackGdColour="Wheat";
	actBackGdColour="Yellow";
	new_active = "active_orange";
	switchColour();
}
 
 
function toGreen() {
	currStyle = "green";
	overBackGdColour= "Lime";
	overColour= "Black";
	panelBackGdColour = "PaleGreen"
	panelColour = "Black"
	columnBackGdColour = "SpringGreen"
	columnColour = "Black"
    mainBackGdColour="Aquamarine";
	actBackGdColour="Chartreuse";
	new_active = "active_green";
	switchColour();
}
 
 
function toRed() {
	currStyle = "red";
	overBackGdColour= "Fuchsia";
	overColour= "Black";
	panelBackGdColour = "LightPink"
	panelColour = "Black"
	columnBackGdColour = "Red"
	columnColour = "Black"
    mainBackGdColour="MistyRose";
	actBackGdColour="HotPink";
	new_active = "active_red";
	switchColour();
}
 
function toBlue() {
	currStyle = "blue";
	overBackGdColour= "RoyalBlue";
	overColour= "White";
	panelBackGdColour = "LightSkyBlue"
	panelColour = "Black"
	columnBackGdColour = "Blue"
	columnColour = "White"
    mainBackGdColour="LightCyan";
	actBackGdColour="CornflowerBlue";
	new_active = "active_blue";
	switchColour();
}

function hideAll() {
    for (i = 0; i < acc.length; i++) {
        var panel = acc[i].nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          acc[i].classList.remove(active);
        }
    }
}

function showAll() {
    for (i = 0; i < acc.length; i++) {
        var panel = acc[i].nextElementSibling;
        if (panel.style.maxHeight != null) {
          panel.style.maxHeight = panel.scrollHeight + "px";
          acc[i].classList.add(active);
        }
    }
}


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove(active);
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add(active);
    }
    });

    acc[i].addEventListener("mouseenter", function(event) {
        event.target.style.background=overBackGdColour;
        event.target.style.color=overColour;
    });
    acc[i].addEventListener("mouseleave", function(event) {
        event.target.style.background=normalBackGdColour;
        event.target.style.color=normalColour;
    });
};

