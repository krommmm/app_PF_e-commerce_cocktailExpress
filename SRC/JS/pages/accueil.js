import getAllCocktails from '../services/getAllCocktails';
import afficherCocktails from '../components/afficherCocktails';

const accueil = () => {
	const adresse = `https://gobliiins.fr/api/cocktail`;

	(async () => {
		let result = await getAllCocktails(adresse);
		let mesCocktails = afficherCocktails(result);
		document.querySelector('.cocktails_container').innerHTML = mesCocktails;
	})();
};
export default accueil;
