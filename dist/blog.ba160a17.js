/**
 * Gère l'affichage des dialogues et des articles.
 */ function dialogs() {
    /**
     * Sélectionne tous les boutons déclencheurs de dialogues.
     * @type {NodeListOf<HTMLElement>}
     */ const dialogBtns = document.querySelectorAll("[data-dialog]");
    /**
     * Sélectionne tous les éléments de dialogue.
     * @type {NodeListOf<HTMLElement>}
     */ const dialogs = document.querySelectorAll(".dialog");
    // Ajout d'un écouteur d'événements à chaque bouton déclencheur de dialogue
    dialogBtns.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            toggleDialog(); // Appel de la fonction pour basculer l'état du dialogue
        });
    });
    // Ajout d'un écouteur d'événements à chaque élément de dialogue
    dialogs.forEach((dialog)=>{
        dialog.addEventListener("click", ()=>{
            toggleDialog(); // Appel de la fonction pour basculer l'état du dialogue
        });
    });
    /**
     * Bascule l'état du dialogue entre affiché et caché.
    */ function toggleDialog() {
        /**
         * Sélectionne le premier élément de dialogue.
         * @type {HTMLElement}
         */ const dialog = document.querySelector(".dialog");
        // Basculement des classes 'hidden' et 'open' pour modifier l'état d'affichage
        dialog.classList.toggle("hidden");
        dialog.classList.toggle("open");
    }
}
// Appel de la fonction pour gérer les dialogues
dialogs();
/**
 * Sélectionne tous les éléments de basculement d'article.
 * @type {NodeListOf<HTMLElement>}
 */ const articleToggle = document.querySelectorAll(".article__dialog");
// Ajout d'un écouteur d'événements à chaque élément de basculement d'article
articleToggle.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("hidden"); // Basculement de la classe 'hidden' pour afficher ou cacher l'article
    });
});

//# sourceMappingURL=blog.ba160a17.js.map
