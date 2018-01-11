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

	 

	 function aléatoire (annuaire){

		var random = Math.round (Math.random() * (annuaire.length - 1));
	 	var stock = annuaire[random];

	 	annuaire.splice(random,1);
	 	return stock;
	 	for (){};
	 	while(){};

	 };


	
})();