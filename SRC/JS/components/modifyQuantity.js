const modifyQuantity = (e) => {
	let quantity = e.target.value;

	let name = e.target.closest('article').querySelector('h2').textContent;
	let accessoire = e.target
		.closest('article')
		.querySelector('.accessoire').textContent;
	let localStorageContent = JSON.parse(localStorage.getItem('cocktails'));

	localStorageContent.forEach((cocktail) => {
		if (cocktail.nom === name && cocktail.accessoire === accessoire) {
			cocktail.unitée = quantity;
		}
	});

	return localStorageContent;
};

export default modifyQuantity;
