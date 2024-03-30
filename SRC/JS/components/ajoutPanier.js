const ajoutPanier = (clickedElement) => {
	const container = clickedElement.closest('.container');
	const name = container.querySelector('.texte h2').textContent;
	const accessoire = container.querySelector('select').value;
	const nombre = container.querySelector('#nombre').value;

	// Récupération des cocktails dans le ls
	let mesCocktails = JSON.parse(localStorage.getItem('cocktails')) || [];

	// Vérifie si le cocktail est déjà dans le panier
	const existingCocktailIndex = mesCocktails.findIndex(
		(cocktail) =>
			cocktail.nom === name && cocktail.accessoire === accessoire
	);

	if (existingCocktailIndex !== -1) {
		mesCocktails[existingCocktailIndex].unitée = parseFloat(mesCocktails[existingCocktailIndex].unitée) + parseFloat(nombre); 
	} else {
		mesCocktails.push({
			nom: name,
			accessoire: accessoire,
			unitée: nombre,
		});
	}

    return mesCocktails;
	
};
export default ajoutPanier;
