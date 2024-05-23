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

//# sourceMappingURL=blog.1ec4231e.js.map
