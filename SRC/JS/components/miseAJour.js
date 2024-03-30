const miseAJour = (localStorageContent, result) => {
	let newLocalStorageContent = [...localStorageContent];
	let newResult = [...result];
	newLocalStorageContent.forEach((cocktail_ls) => {
		const matchingResult = newResult.find(
			(resultItem) => resultItem.nom === cocktail_ls.nom
		);
		if (matchingResult) {
			cocktail_ls.prix = matchingResult.prix;
			cocktail_ls.imageUrl = matchingResult.imageUrl;
		}
	});

	return newLocalStorageContent;
};

export default miseAJour;
