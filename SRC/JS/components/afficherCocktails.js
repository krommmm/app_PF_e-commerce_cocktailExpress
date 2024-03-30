const afficherCocktails = (array) => {
    const mesCocktails = array.map((cocktail) => {
        return `
            <article>
                <a href="./SRC/HTML/focus.html?id=${cocktail.uuid}">
                    <img src="./SRC/assets/images/cocktails/${cocktail.imageUrl}.jpg" alt="${cocktail.altTxt}" />
                </a>
                <h3>${cocktail.nom}</h3>
                <p>${cocktail.prix} €</p>
                <a href="./SRC/HTML/focus.html?id=${cocktail.uuid}">
                    <button class="btn">
                        <i class="fa-solid fa-cart-shopping"></i>Continuer
                    </button>
                </a>
            </article>
        `;
    });
return mesCocktails;

};

export default afficherCocktails;
