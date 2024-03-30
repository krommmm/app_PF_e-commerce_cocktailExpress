import getOneCocktails from '../services/getOneCocktails';
import afficherUnCocktail from '../components/afficherUnCocktail';
import getUrl from '../utils/getUrl';

const zoom = () => {
	let id = getUrl();
	(async () => {
		const adresse2 = `https://gobliiins.fr/api/cocktail/${id}`;
		let result = await getOneCocktails(adresse2);
		// en php chaque accessoire est binaire (0 = rien , 1 = accessoire)
		result.parasols!==1 ? result.parasols="" : result.parasols="parasols";
		result.sucre_glace!==1 ? result.sucre_glace="" : result.sucre_glace="sucre glace";
		result.paille!==1 ? result.paille="" : result.paille="paille";

		result.accessoire = [result.parasols, result.sucre_glace, result.paille];
		let focus = afficherUnCocktail(result);
		 document.querySelector('.focus').innerHTML = focus;
	})();
};
export default zoom;
