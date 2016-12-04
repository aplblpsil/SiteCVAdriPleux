/* --------------------------------
    = Envoi du mailto page contact
   -------------------------------- */
/* S'active une fois que l'utilisateur clique sur le bouton "Envoyer" */
function JS_submit(frm) {
		var msg = document.getElementById("msg").value;
		var subject = document.getElementById("sujet").value;
		/* Récupère le sujet et le message et les place automatiquement
		 dans les bons champs à l'ouverture du mailto */	
		frm.action = "mailto:adrien.pleux@gmail.com?subject="+subject+"&body="+msg;
 		return true;	
}
/* -------------------------------- 
    = Drag and drop page d'accueil
   -------------------------------- */
/*S'active au moment où l'on maintien le clique sur un élément mobile*/
function drag(target, evt){
	evt.dataTransfer.setData("recept", target.id);
}
/*S'active au moment où l'on place l'élément dans la zone de réception*/
function drop(target, evt){
	var id = evt.dataTransfer.getData("recept", target.id);
	target.appendChild(document.getElementById(id)); //écriture dans le document html de l'élément déplacé
	evt.preventDefault();
	/* On lance l'url correspondante au logo déposé dans la zone de réception */
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

/* -------------------------------- 
    = Animations CSS3
   -------------------------------- */

/* S'active au clic du bouton "Tester !" */   
function anim(){
	var panda = document.getElementById("panda");
	/* 
		On met en place une animation vide puis on fixe un temps d'exécution pour permettre de cliquer 
		plusieurs fois sur le bouton "Tester !" sans avoir à changer le type d'animation  
	*/
	panda.style.webkitAnimation = "";
	panda.style.animation = "";
	setTimeout(function(){
		var type = document.getElementById("type").value;
		var temps = document.getElementById("temps").value;
		var infini = document.getElementById("infinite").checked;
		var direction = document.getElementById("direction").value;
		/* Mise en place de la propriété css d'animation */
		panda.style.webkitAnimation = type+" "+temps+"s"+((infini == true)?" infinite":" 1").toString()+" "+direction;
		panda.style.animation = type+" "+temps+"s"+((infini == true)?" infinite":" 1").toString()+" "+direction;
	}, 200);
}







