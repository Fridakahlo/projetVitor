(function main(){

	 var annuaire = [
	 	{prenom:'Ana', nom:'Jimenez',},
	 	{prenom:'Céline', nom:'Calmels',},
	 	{prenom:'Corentin', nom:'Berlana',},
	 	{prenom:'Grégory', nom:'Bouloc',},
	 	{prenom:'Joris', nom:'Bringer',},
	 	{prenom:'Antoine', nom:'Caron',},
	 	{prenom:'Vanessa', nom:'Chaillou Delouvrier',},
	 	{prenom:'David', nom:'Da Silva',},
	 	{prenom:'Rud', nom:'De Korte',},
	 	{prenom:'Florian', nom:'Javanet',},
	 	{prenom:'Fabrice', nom:'Laroche',},
	 	{prenom:'Ilham', nom:'Parfait',},
	 	{prenom:'Frederic', nom:'Salm',},
	 	{prenom:'Christelle', nom:'Talbot',},
	 	{prenom:'Mathéo', nom:'Zeller',},
	 ];

	 

	//  function aleatoire (annu){

	// 	var random = Math.round (Math.random() * (annu.length - 1));
	//  	var stock = annu[random];

	//  	annu.splice(random,1);
	//  	return stock;

	//  };
	// for (i=0;i>4;i++){
	// 	var personne = aleatoire(annuaire)
	// 	$().append(personne);
	// };


	$('.add').click(function(){ //ajout de nouvelles personnes
		var pren = $('.pren').val();
		var nm = $('.nom').val();
		var annuaire_json = JSON.stringify(annuaire);

		$('.membre').append('<li><input type="checkbox" name="cb" checked="checked" class="btn">'+pren+'</li>')
		$('.pren').val("");
		$('.nom').val("");

		annuaire.push({prenom:pren,nom:nm});
		sessionStorage.setItem("annuaire",annuaire_json);
		

	});

	$('.letsgo').click(function(){ //lancement random
		var grp = $('.nbrgrp').val();

		function checkbox() {     

			var chkBox = document.getElementByclass('.btn'); 
			
			if (chkBox.checked)     {  
					console.log(chkBox);
			    } 
		};
		
	});

})();