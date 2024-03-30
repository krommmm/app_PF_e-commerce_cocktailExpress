import getAllCocktails from '../services/getAllCocktails';
import obtenirDetails from '../components/obtenirDetails';
import afficherPanier from '../components/afficherPanier';
import header from '../layout/header';

const panier = () => {
	const adresse = `https://gobliiins.fr/api/cocktail`;
	(async () => {
		let result = await getAllCocktails(adresse);
		let details = obtenirDetails(result);
		let panier = afficherPanier(details);
		document.querySelector('.panier_container').innerHTML = panier;
		header();
	})();
};
export default panier;
