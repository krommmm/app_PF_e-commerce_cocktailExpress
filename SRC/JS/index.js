import header from './layout/header';
import footer from './layout/footer';
import ajoutPanier from './components/ajoutPanier';
import obtenirDetails from './components/obtenirDetails';
import afficherPanier from './components/afficherPanier';
import supprimerUnCocktail from './components/supprimerUnCocktail';
import getAllCocktails from './services/getAllCocktails';
import modifyQuantity from './components/modifyQuantity';
import miseAJour from './components/miseAJour';
import accueil from './pages/accueil';
import panier from './pages/panier';
import zoom from './pages/zoom';
import getPageName from './utils/getPageName';



header();
footer();

const adresse = `https://gobliiins.fr/api/cocktail`;



// ROUTAGE
let pageName = getPageName();
switch (pageName) {
	case 'index':
		accueil();
		break;
	case '':
		accueil(); 
	case 'focus':
		zoom();
		break;
	case 'panier':
		panier();
		break;

	default:
		console.error('Page not found');
}

// ADDEVENTLISTENER
document.addEventListener('click', async (event) => {
	let clickedElement = event.target;

	if (clickedElement.getAttribute('id') === 'btn_focus') {
		let mesCocktails = ajoutPanier(clickedElement);
		localStorage.setItem('cocktails', JSON.stringify(mesCocktails));
		header();
	} else if (clickedElement.getAttribute('id') === 'btn_supprimer') {
		(async () => {
			let localStorageContent = await supprimerUnCocktail(event.target, adresse);
			localStorage.setItem("cocktails", JSON.stringify(localStorageContent)); 
			let result = await getAllCocktails(adresse);
			let details = miseAJour(localStorageContent,result);
			let panier = afficherPanier(details);
			document.querySelector('.panier_container').innerHTML = panier;
			header();
		})();
	} else if (clickedElement.classList.contains('input_panier')) {
		let localStorageContent = modifyQuantity(event);
		localStorage.setItem('cocktails', JSON.stringify(localStorageContent));
		let result = await getAllCocktails(adresse);
		let details = obtenirDetails(result);
		let panier = afficherPanier(details);
		document.querySelector('.panier_container').innerHTML = panier;
		header();
	}
});

