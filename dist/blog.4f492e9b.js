/**
 * Sélectionne l'élément bouton pour basculer la vue.
 * @type {HTMLElement}
 */ const toggleBtn = document.querySelector(".toggleView__btn");
/**
 * Sélectionne l'élément conteneur des cartes.
 * @type {HTMLElement}
 */ const container = document.querySelector(".card__container");
/**
 * Ajoute un écouteur d'événements pour le clic sur le bouton de bascule,
 * qui bascule la classe pour modifier l'affichage.
 * @param {Event} event - L'événement de clic.
 */ toggleBtn.addEventListener("click", ()=>{
    container.classList.toggle("displayChange"); // Basculement de la classe pour modifier l'affichage
});
/**
 * Sélectionne le bouton de recherche dans le DOM.
 * @type {HTMLElement}
 */ const searchBtn = document.querySelector(".search");
/**
 * Sélectionne le dialogue de recherche dans le DOM.
 * @type {HTMLElement}
 */ const searchDialog = document.querySelector(".search__dialog");
/**
 * Sélectionne la bannière dans le DOM.
 * @type {HTMLElement}
 */ const banner = document.querySelector(".banner");
/**
 * Sélectionne le champ de recherche dans le DOM.
 * @type {HTMLInputElement}
 */ const searchInput = document.querySelector(".search__input");
/**
 * Sélectionne toutes les cartes d'articles dans le DOM.
 * @type {NodeList}
 */ const articleCards = document.querySelectorAll(".article__card");
/**
 * Sélectionne toutes les cartes de produits dans le DOM.
 * @type {NodeList}
 */ const productCards = document.querySelectorAll(".product");
/**
 * Ajoute un écouteur d'événements au clic sur le bouton de recherche pour afficher ou cacher le dialogue de recherche.
 * @listens click
 */ searchBtn.addEventListener("click", ()=>{
    // Basculement de la classe 'reduceBanner' sur l'élément de bannière pour réduire ou restaurer la bannière
    banner.classList.toggle("reduceBanner");
    // Basculement des classes 'hidden' et 'openFromRight' sur le dialogue de recherche pour l'afficher ou le cacher
    searchDialog.classList.toggle("hidden");
    searchDialog.classList.toggle("openFromRight");
});
/**
 * Ajoute un écouteur d'événements à la frappe de touche dans le champ de recherche pour filtrer les cartes d'articles et de produits.
 * @param {KeyboardEvent} search - L'événement de frappe de touche dans le champ de recherche.
 * @listens keypress
 */ searchInput.addEventListener("keypress", (search)=>{
    // Obtention de la valeur de recherche en convertissant le texte saisi en minuscules
    const searchValue = (searchInput.value + search.key).toLowerCase();
    // Filtrage des cartes d'articles
    articleCards.forEach((card)=>{
        // Obtention du résultat de recherche associé à chaque carte d'article en convertissant en minuscules
        const searchResult = card.getAttribute("data-search").toLowerCase();
        // Vérification si le résultat de recherche est inclus dans la valeur de recherche
        if (searchResult.includes(searchValue)) // Si c'est le cas, supprimer la classe 'hidden' pour afficher la carte d'article
        card.classList.remove("hidden");
        else // Sinon, ajouter la classe 'hidden' pour cacher la carte d'article
        card.classList.add("hidden");
    });
    // Filtrage des cartes de produits (fonctionnement similaire à celui des cartes d'articles)
    productCards.forEach((product)=>{
        const searchResult = product.getAttribute("data-search").toLowerCase();
        if (searchResult.includes(searchValue)) product.classList.remove("hidden");
        else product.classList.add("hidden");
    });
});

//# sourceMappingURL=blog.4f492e9b.js.map
