const afficherPanier = (array) => {
	// let panier = "";
	// for(let i=0;i<array.length;i++){
	// panier +=
	//  `
	//             <article>
	//                 <div class="image">
	//                     <img
	//                         class="panierPageImg"
	//                         src="../images/cocktails/${array[i].imageUrl}.jpg"
	//                         alt="${array[i].altTxt}"
	//                     />
	//                 </div>
	//                 <div class="texte">
	//                     <h2>${array[i].nom}</h2>
	//                     <p><span class="prix">${array[i].prix}</span>&nbsp;€</p>
	//                     <p class="accessoire">${array[i].accessoire}</p>
	//                     <label for="nombre" class="quantity">${array[i].unitée}</label
	//                     ><input
	//                         type="number"
	//                         min="1"
	//                         max="100"
	//                         id="nombre"
	//                         class="input_panier"
	//                         value="${array[i].unitée}"
	//                         name="nombre"
	//                     />
	//                     <div class="btn_container">
	//                         <button id="btn_supprimer" class="btn">Supprimer</button>
	//                     </div>
	//                 </div>
	//             </article>
	// `;
	// }

	let newArray = [...array];
	let panier = newArray.map((cocktail) => {
		return `
        <article>
            <div class="image">
                <img
                    class="panierPageImg"
                    src="../images/cocktails/${cocktail.imageUrl}.jpg"
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
