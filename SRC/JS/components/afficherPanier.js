const afficherPanier = (array) => {

	let newArray = [...array];
	let panier = newArray.map((cocktail) => {
		return `
        <article>
            <div class="image">
                <img
                    class="panierPageImg"
                    src="../assets/images/cocktails/${cocktail.imageUrl}.jpg"
                    alt="${cocktail.altTxt}"
                />
            </div>
            <div class="texte">
                <h2>${cocktail.nom}</h2>
                <p><span class="prix">${cocktail.prix}</span>&nbsp;€</p>
                <p class="accessoire">${cocktail.accessoire}</p>
                <label for="nombre" class="quantity">${cocktail.unitée}</label
                ><input
                    type="number"
                    min="1"
                    max="100"
                    id="nombre"
                    class="input_panier"
                    value="${cocktail.unitée}"
                    name="nombre"
                />
                <div class="btn_container">
                    <button id="btn_supprimer" class="btn">Supprimer</button>
                </div>
            </div>
        </article> 
`;
	});

	return panier;
};
export default afficherPanier;
