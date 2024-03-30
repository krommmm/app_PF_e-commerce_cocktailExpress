import getAllCocktails from '../services/getAllCocktails';
import obtenirDetails from '../components/obtenirDetails';

const header = async () => {

	const url = `https://gobliiins.fr/api/cocktail`;

	//nb articles
	let isLocal = JSON.parse(localStorage.getItem('cocktails'));

	setTimeout(()=>{
		document.querySelector('.nbArticles').classList.remove("move");
	},1000);
	document.querySelector('.nbArticles').classList.add("move");

	if (isLocal !== null) {
		document.querySelector('.nbArticles').textContent = isLocal.length;
	}
	
	let result = await getAllCocktails(url);
	let panierFinal = obtenirDetails(result);
	let total = 0;
	for (let i = 0; i < panierFinal.length; i++) {
		total +=
			parseFloat(panierFinal[i].prix) * parseFloat(panierFinal[i].unitée);
	}
	
	document.querySelector('.prix_total').textContent = total;
};
export default header;
