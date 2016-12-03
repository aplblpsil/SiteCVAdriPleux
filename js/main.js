/* Envoi du mailto */
function JS_submit(frm) {
		var msg = document.getElementById("msg").value;
		var subject = document.getElementById("sujet").value;	
		frm.action = "mailto:adrien.pleux@gmail.com?subject="+subject+"&body="+msg;
 		return true;	
}
/* Drag and Drop page d'accueil */

function drag(target, evt){
	evt.dataTransfer.setData("recept", target.id);
}
function drop(target, evt){
	var id = evt.dataTransfer.getData("recept", target.id);
	target.appendChild(document.getElementById(id));
	evt.preventDefault();
	switch(id){
		case 'gplus' :
			window.open("https://plus.google.com/111018673005485122819");
		break;
		case 'linkedin' :
			window.open("https://www.linkedin.com/in/adrien-pleux-b8b49ab5");
		break;
		case 'pearltrees' :
			window.open("https://www.pearltrees.com/adripleux");
		break;
		case 'facebook' :
			window.open("https://www.facebook.com/profile.php?id=1066196571");
		break;
		case 'soundcloud' :
			window.open("https://soundcloud.com/adrien-marley");
		break;
		default: 
			alert("Drag and drop non-fonctionnel");
	}	
}

/* Page animations css */


function animate(){

	alert("hihi");
}

/*
function verifSelection() {
	invalidChars = " /:,;'";
	if (document.formC.champ1.value == "") {
		return false;
	} 
	if (document.formC.champ2.value == "") {
		return false;
	} 
	if (document.formC.zone_email1.value == "") {
		return false;
	}

	for (i=0; i < invalidChars.length; i++) {	// does it contain any invalid characters?
		badChar = invalidChars.charAt(i);
		if (document.formC.zone_email1.value.indexOf(badChar,0) > -1) {
			alert("Votre adresse e-mail contient des caractères invalides. Veuillez vérifier.");
			document.formC.zone_email1.focus();
			return false;
		}
	}

	atPos = document.formC.zone_email1.value.indexOf("@",1);			// there must be one "@" symbol
	if (atPos == -1) {
		alert('Votre adresse e-mail ne contient pas le signe "@". Veuillez vérifier.');
		document.formC.zone_email1.focus();
		return false;
	}

	if (document.formC.zone_email1.value.indexOf("@",atPos+1) != -1) {	// and only one "@" symbol
		alert('Il ne doit y avoir qu\'un signe "@". Veuillez vérifier.');
		document.formC.zone_email1.focus();
		return false;
	}

	periodPos = document.formC.zone_email1.value.indexOf(".",atPos);

	if (periodPos == -1) {					// and at least one "." after the "@"
		alert('Vous avez oublié le point "." après le signe "@". Veuillez vérifier.');
		document.formC.zone_email1.focus();
		return false;
	}

	if (periodPos+3 > document.formC.zone_email1.value.length)	{		// must be at least 2 characters after the 
		alert('Il doit y avoir au moins deux caractères après le signe ".". Veuillez vérifier.');
		document.formC.zone_email1.focus();
		return false;
	}
	
} */

/*JS leopold*/
/*
function overImg(){
	this.style.borderBottom="3px solid blue";
	this.style.borderRight="3px solid blue";
}

function leaveImg(){
	this.style.borderBottom="3px solid black";
	this.style.borderRight="3px solid black";
}

function overLi(event){
	event.target.getElementsByTagName('ul')[0].style.display="block";
	
}

function leaveLi(event){	
	event.target.getElementsByTagName('ul')[0].style.display="none";
}

function overCV(event){
	
	prompt(event.target.getElementsByClassName('CVHid'));
	event.target.getElementsByTagName('div').style.display="block";
	
}

function leaveCV(event){	
	event.target.getElementsByTagName('div')[0].style.display="none";
}

var tabDiv = document.getElementsByClassName("divImage");
for (var i = 0; i < tabDiv.length; i++) {
    tabDiv[i].addEventListener('mouseover', overImg, false);
	tabDiv[i].addEventListener('mouseleave', leaveImg, false);
}
var tabLi = document.getElementsByClassName("titreMenuH");
for (var i = 0; i < tabLi.length; i++) {
	
    tabLi[i].addEventListener('mouseover', overLi, false);
	tabLi[i].addEventListener('mouseleave', leaveLi, false);
	
}

var tabCV = document.getElementsByClassName("divCV");
for (var i = 0; i < tabCV.length; i++) {
	
    tabCV[i].addEventListener('mouseover', overCV, false);
	tabCV[i].addEventListener('mouseleave', leaveCV, false);
	
}*/





