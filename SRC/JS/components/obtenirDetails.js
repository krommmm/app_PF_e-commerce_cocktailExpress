const obtenirDetails = (array) => {
	let cocktailsLs = [];
	let panierFinal = [];

	cocktailsLs = JSON.parse(localStorage.getItem('cocktails'));
	if (cocktailsLs === null) {
		return;
	}
	let cocktailsBDD = [...array];

	cocktailsBDD.forEach((bdd)=>{
		let matchedResult = cocktailsLs.filter((ls)=>ls.nom === bdd.nom);
		if(matchedResult){
			matchedResult.forEach((result)=>{
				panierFinal.push({...bdd,accessoire:result.accessoire,unitée:result.unitée});
			});
		}
	})


	return panierFinal;
};
export default obtenirDetails;
