const supprimerUnCocktail = async (e) => {
	let container = e.parentElement;
	let texteContainer = container.closest('.texte');
	let nom = texteContainer.querySelector('h2').textContent;
	let accessoire = texteContainer.querySelector('.accessoire').textContent;
	let localStorageContent = JSON.parse(localStorage.getItem('cocktails'));

	let newLocalStorageContent = [...localStorageContent];

	newLocalStorageContent.forEach((cocktail, index) => {
		if (cocktail.nom === nom && cocktail.accessoire === accessoire) {
			newLocalStorageContent.splice(index, 1);
		}
	});

	return newLocalStorageContent;
};
export default supprimerUnCocktail;
