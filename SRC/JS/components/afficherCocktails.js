const afficherCocktails = (array) => {
    const mesCocktails = array.map((cocktail) => {
        return `
            <article>
                <a href="./SRC/HTML/focus.html?id=${cocktail._id}">
                    <img src="./SRC/images/cocktails/${cocktail.imageUrl}.jpg" alt="${cocktail.altTxt}" />
                </a>
                <h3>${cocktail.nom}</h3>
                <p>${cocktail.prix} €</p>
                <a href="./SRC/HTML/focus.html?id=${cocktail._id}">
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
