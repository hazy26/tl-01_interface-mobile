class Card {
    constructor(title, imgMobile, imgDesktop, shortDesc){
        this.title = title;
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
        this.shortDesc = shortDesc;
    }
    toHtml() {
        const li = document.createElement("li");
        li.classList.add("article__card");
        li.id = this.title.toLowerCase();
        li.setAttribute("data-search", this.title);
        const h2 = document.createElement("h2");
        h2.textContent = this.title;
        li.appendChild(h2);
        const figure = document.createElement("figure");
        const picture = document.createElement("picture");
        figure.appendChild(picture);
        li.appendChild(figure);
        const div = document.createElement("div");
        li.appendChild(div);
        const source = document.createElement("source");
        source.media = "(min-width: 768px)";
        source.srcset = this.imgDesktop;
        const img = document.createElement("img");
        img.src = this.imgMobile;
        img.alt = "Une Image";
        picture.appendChild(source);
        picture.appendChild(img);
        const p = document.createElement("p");
        p.textContent = this.shortDesc;
        div.appendChild(p);
        const btn = document.createElement("button");
        btn.classList.add("article__btn");
        btn.id = this.title;
        btn.textContent = "Voir l'article";
        btn.addEventListener("click", ()=>{
            showArticle(btn);
        });
        div.appendChild(btn);
        return li;
    }
}
const cards = [
    new Card("Probl\xe8mes rencontr\xe9s", "https://picsum.photos/id/29/800/600", "https://picsum.photos/id/29/1600/1200", "Quelques probl\xe8mes lors de la cr\xe9ation du projets..."),
    new Card("Le Philodendron", "https://picsum.photos/id/129/800/600", "https://picsum.photos/id/129/1600/1200", "Le Philodendron est une plante d'int\xe9rieur populaire pour ses feuilles luxuriantes et sa facilit\xe9 d'entretien. Originaire des for\xeats tropicales d'Am\xe9rique centrale et du Sud, il est parfait pour ajouter une touche de verdure \xe0 tout espace."),
    new Card("Le Pothos", "https://picsum.photos/id/232/800/600", "https://picsum.photos/id/232/1600/1200", "Le Pothos, \xe9galement connu sous le nom de lierre du diable, est une plante d'int\xe9rieur tr\xe8s r\xe9sistante et facile \xe0 entretenir. Originaire des \xeeles Salomon, il est appr\xe9ci\xe9 pour ses feuilles brillantes en forme de c\u0153ur."),
    new Card("Le Monstera Deliciosa", "https://picsum.photos/id/229/800/600", "https://picsum.photos/id/229/1600/1200", "Le Monstera Deliciosa, \xe9galement appel\xe9 plante gruy\xe8re en raison de ses feuilles perfor\xe9es, est une plante d'int\xe9rieur tropicale tr\xe8s populaire. Originaire des for\xeats tropicales d'Am\xe9rique centrale, elle apporte une touche exotique \xe0 tout int\xe9rieur."),
    new Card("La Sansevieria", "https://picsum.photos/id/123/800/600", "https://picsum.photos/id/123/1600/1200", "La Sansevieria, \xe9galement connue sous le nom de langue de belle-m\xe8re, est une plante succulente r\xe9sistante, id\xe9ale pour les d\xe9butants. Elle est c\xe9l\xe8bre pour ses feuilles \xe9rig\xe9es et graphiques."),
    new Card("Le Ficus Elastica", "https://picsum.photos/id/92/800/600", "https://picsum.photos/id/92/1600/1200", "Le Ficus Elastica, ou figuier caoutchouc, est une plante d'int\xe9rieur imposante avec de grandes feuilles brillantes. Originaire d'Asie du Sud-Est, il est appr\xe9ci\xe9 pour son aspect d\xe9coratif et sa facilit\xe9 d'entretien."),
    new Card("Le Calathea", "https://picsum.photos/id/43/800/600", "https://picsum.photos/id/43/1600/1200", "Le Calathea, connu pour ses magnifiques motifs foliaires, est une plante d'int\xe9rieur tropicale qui ajoute une touche de sophistication \xe0 tout espace. Originaire des for\xeats d'Am\xe9rique du Sud, il est appr\xe9ci\xe9 pour son feuillage d\xe9coratif."),
    new Card("L'Aloe Vera", "https://picsum.photos/id/240/800/600", "https://picsum.photos/id/240/1600/1200", "L'Aloe Vera est une plante succulente m\xe9dicinale connue pour ses propri\xe9t\xe9s apaisantes et cicatrisantes. Originaire des r\xe9gions arides d'Afrique, elle est facile \xe0 entretenir et a de nombreux usages b\xe9n\xe9fiques."),
    new Card("Le Dracaena", "https://picsum.photos/id/67/800/600", "https://picsum.photos/id/67/1600/1200", "Le Dracaena, ou dragonnier, est une plante d'int\xe9rieur populaire pour ses tiges \xe9lanc\xe9es et ses feuilles arqu\xe9es. Originaire des r\xe9gions tropicales d'Afrique, elle est facile \xe0 cultiver et \xe0 entretenir.")
];
class Article {
    constructor(title, imgMobile, imgDesktop, longDesc, author, date, readingTime, totalWords){
        this.title = title;
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
        this.longDesc = longDesc;
        this.author = author;
        this.date = date;
        this.readingTime = readingTime;
        this.totalWords = totalWords;
    }
    toHtml() {
        const dialog = document.createElement("li");
        dialog.classList.add("article__dialog", "hidden");
        dialog.id = this.title;
        const section = document.createElement("section");
        dialog.appendChild(section);
        const closeBtn = document.createElement("i");
        closeBtn.classList.add("close__btn", "articleToggle");
        const closeIcon = document.createElement("img");
        closeBtn.appendChild(closeIcon);
        closeIcon.src = "./assets/img/icons/close_black.svg";
        section.appendChild(closeBtn);
        const picture = document.createElement("picture");
        const source = document.createElement("source");
        source.media = "(min-width: 768px)";
        source.srcset = this.imgDesktop;
        picture.appendChild(source);
        const img = document.createElement("img");
        img.src = this.imgMobile;
        picture.appendChild(img);
        section.appendChild(picture);
        const h3 = document.createElement("h3");
        section.appendChild(h3);
        h3.textContent = this.title;
        const h6 = document.createElement("h6");
        section.appendChild(h6);
        h6.textContent = this.readingTime;
        const p = document.createElement("p");
        section.appendChild(p);
        p.textContent = this.longDesc;
        const h4 = document.createElement("h4");
        section.appendChild(h4);
        h4.textContent = this.author;
        const h5 = document.createElement("h5");
        section.appendChild(h5);
        h5.textContent = this.date;
        const span = document.createElement("span");
        section.appendChild(span);
        span.textContent = this.totalWords;
        return dialog;
    }
}
const articleDialogs = [
    new Article("Probl\xe8mes rencontr\xe9s", "https://picsum.photos/id/6/600/600", "https://picsum.photos/id/6/1200/1200", "Le contenu du premier article doit \xeatre \xe0 propos des probl\xe8mes que vous avez rencontr\xe9s et des solutions ou sources qui vous ont permis de les r\xe9soudre. Au moins, 250 mots sont attendus. Un lien externe = 1 mot. Le contenu des autres articles n'a pas d\u2019importance", "Alexis Turcotte", "14 juin 2024", "Temps de lecture: 2 min.", "250 mots"),
    new Article("Le Philodendron", "./assets/img/mobile/philodendron_mobile.jpg", "./assets/img/desktop/philodendron.jpg", "Le Philodendron est une plante d'int\xe9rieur tr\xe8s appr\xe9ci\xe9e pour son feuillage abondant et sa robustesse. Originaire des for\xeats tropicales d'Am\xe9rique centrale et du Sud, cette plante se d\xe9cline en plusieurs vari\xe9t\xe9s, allant des grandes feuilles en forme de c\u0153ur aux petites feuilles d\xe9coup\xe9es, offrant ainsi un large \xe9ventail de choix pour les amateurs de plantes. Cette plante est extr\xeamement facile \xe0 entretenir, ce qui en fait un choix parfait pour les d\xe9butants. Le Philodendron pr\xe9f\xe8re une lumi\xe8re indirecte mod\xe9r\xe9e, bien qu'il puisse tol\xe9rer des conditions de faible luminosit\xe9. En termes d'arrosage, il est important de maintenir le sol l\xe9g\xe8rement humide, mais de laisser la surface s\xe9cher entre les arrosages pour \xe9viter l'exc\xe8s d'eau. Le Philodendron est \xe9galement reconnu pour ses propri\xe9t\xe9s d\xe9polluantes, aidant \xe0 \xe9liminer des toxines telles que le formald\xe9hyde, le benz\xe8ne et le xyl\xe8ne de l'air int\xe9rieur, contribuant", "Laurence D\xe9silets", "12 novembre 2020", "Temps de lecture: 3 min.", "300 mots"),
    new Article("Le Pothos", "./assets/img/mobile/pothos_mobile.jpg", "./assets/img/desktop/pothos.jpg", "Le Pothos, ou lierre du diable, est une plante d'int\xe9rieur extr\xeamement populaire gr\xe2ce \xe0 sa robustesse et \xe0 son entretien minimal. Originaire des \xeeles Salomon, cette plante est reconnue pour ses longues tiges tra\xeenantes et ses feuilles en forme de c\u0153ur, souvent marbr\xe9es de blanc, jaune ou vert p\xe2le. L'un des plus grands atouts du Pothos est sa capacit\xe9 \xe0 survivre dans des conditions de lumi\xe8re vari\xe9es, allant de la lumi\xe8re indirecte vive \xe0 des endroits plus ombrag\xe9s. Cette flexibilit\xe9 en fait un choix id\xe9al pour presque tous les int\xe9rieurs. Le Pothos est \xe9galement tol\xe9rant \xe0 des arrosages irr\xe9guliers. Il pr\xe9f\xe8re un sol bien drain\xe9 et des arrosages mod\xe9r\xe9s, en laissant le sol s\xe9cher entre deux arrosages. Outre son esth\xe9tique, le Pothos est \xe9galement reconnu pour ses propri\xe9t\xe9s d\xe9polluantes. Il aide \xe0 \xe9liminer les toxines de l'air, telles que le formald\xe9hyde et le benz\xe8ne, contribuant ainsi \xe0 un environnement int\xe9rieur plus sain. La multiplication du Pothos est simple et se fait par bouturage. Il suffit de couper une tige juste en dessous d'un n\u0153ud et de la placer dans l'eau jusqu'\xe0 ce que des racines apparaissent. Ensuite, elle peut \xeatre transplant\xe9e dans du terreau. En r\xe9sum\xe9, le Pothos est une plante d'int\xe9rieur parfaite pour ceux qui cherchent \xe0 ajouter une touche de verdure \xe0 leur espace sans trop d'effort. Sa robustesse, son adaptabilit\xe9 et ses bienfaits pour la qualit\xe9 de l'air en font un choix id\xe9al pour tous, des novices en jardinage aux passionn\xe9s de plantes.", "Cl\xe9ment Lapointe", "22 ao\xfbt 2023", "Temps de lecture: 3 min.", "300 mots"),
    new Article("Le Monstera Deliciosa", "./assets/img/mobile/monstera_mobile.jpg", "./assets/img/desktop/monstera.jpg", "Le Monstera Deliciosa, aussi connu sous le nom de plante gruy\xe8re, est une plante tropicale originaire des for\xeats humides d'Am\xe9rique centrale. Ses grandes feuilles brillantes, caract\xe9ris\xe9es par des perforations naturelles, en font une plante d'int\xe9rieur tr\xe8s pris\xe9e. En milieu naturel, le Monstera peut grimper jusqu'\xe0 20 m\xe8tres, mais en int\xe9rieur, il atteint g\xe9n\xe9ralement entre 2 et 3 m\xe8tres. Pour bien entretenir un Monstera, il est important de le placer dans un endroit lumineux sans exposition directe au soleil. Cette plante appr\xe9cie une humidit\xe9 \xe9lev\xe9e, ce qui peut \xeatre recr\xe9\xe9 avec des vaporisations r\xe9guli\xe8res d'eau. Un arrosage mod\xe9r\xe9, laissant le sol s\xe9cher entre deux arrosages, est id\xe9al pour \xe9viter les racines gorg\xe9es d'eau. Le Monstera Deliciosa est \xe9galement connu pour ses fruits comestibles dans son habitat naturel, d'o\xf9 son nom \xab deliciosa \xbb. Cependant, en int\xe9rieur, il est rare de voir la plante fleurir et fructifier. Avec ses propri\xe9t\xe9s d\xe9polluantes, le Monstera aide \xe0 purifier l'air ambiant en absorbant les toxines pr\xe9sentes. Facile \xe0 multiplier par bouturage, le Monstera Deliciosa est parfait pour les amateurs de plantes d\xe9butants comme exp\xe9riment\xe9s. Sa croissance rapide et son aspect spectaculaire ajoutent une touche de jungle urbaine \xe0 n'importe quel int\xe9rieur, faisant de cette plante un choix incontournable pour les passionn\xe9s de verdure.", "Val\xe9rie Pich\xe9", "1er octobre 2021", "Temps de lecture: 3 min.", "300 mots"),
    new Article("La Sansevieria", "./assets/img/mobile/sansevieria_mobile.jpg", "./assets/img/desktop/sansevieria.jpg", "La Sansevieria, plus commun\xe9ment appel\xe9e langue de belle-m\xe8re, est une plante succulente robuste originaire d'Afrique de l'Ouest. Elle est r\xe9put\xe9e pour ses feuilles rigides, dress\xe9es et souvent marqu\xe9es de bandes vertes ou jaune vif, qui lui conf\xe8rent une apparence graphique et moderne. Cette plante est l'une des plus faciles \xe0 entretenir, ce qui en fait un choix parfait pour les d\xe9butants. La Sansevieria tol\xe8re une large gamme de conditions de lumi\xe8re, allant de la lumi\xe8re directe du soleil \xe0 des endroits faiblement \xe9clair\xe9s. Elle pr\xe9f\xe8re toutefois une lumi\xe8re indirecte mod\xe9r\xe9e pour une croissance optimale. En termes d'arrosage, elle est extr\xeamement tol\xe9rante \xe0 la s\xe9cheresse. Il est important de laisser le sol s\xe9cher compl\xe8tement entre les arrosages pour \xe9viter la pourriture des racines. Outre son aspect esth\xe9tique et sa facilit\xe9 d'entretien, la Sansevieria est \xe9galement connue pour ses propri\xe9t\xe9s d\xe9polluantes. Elle est capable de filtrer diverses toxines de l'air, telles que le benz\xe8ne, le formald\xe9hyde, le trichlor\xe9thyl\xe8ne et le xyl\xe8ne, contribuant ainsi \xe0 un environnement int\xe9rieur plus sain. La propagation de la Sansevieria est \xe9galement simple et peut se faire par division des rhizomes ou par bouturage des feuilles. Cette plante a une croissance lente mais r\xe9guli\xe8re, et peut s'adapter \xe0 divers environnements, ce qui la rend polyvalente pour la d\xe9coration int\xe9rieure. En conclusion, la Sansevieria est une plante d'int\xe9rieur id\xe9ale pour ceux qui recherchent une touche de verdure avec un minimum d'effort. Sa robustesse, son esth\xe9tique unique et ses bienfaits pour la qualit\xe9 de l'air en font un choix incontournable pour tout int\xe9rieur.", "Cl\xe9ment Lapointe", "05 f\xe9vrier 2021", "Temps de lecture: 3 min.", "300 mots"),
    new Article("Le Ficus Elastica", "./assets/img/mobile/ficus_mobile.jpg", "./assets/img/desktop/ficus.jpg", "Le Ficus Elastica, \xe9galement connu sous le nom de figuier caoutchouc, est une plante d'int\xe9rieur populaire, originaire d'Asie du Sud-Est. Ses grandes feuilles ovales, \xe9paisses et brillantes, souvent de couleur vert fonc\xe9, apportent une touche \xe9l\xe9gante et luxuriante \xe0 tout int\xe9rieur. Cette plante est relativement facile \xe0 entretenir et peut s'adapter \xe0 une vari\xe9t\xe9 de conditions de lumi\xe8re, bien qu'elle pr\xe9f\xe8re une lumi\xe8re indirecte vive. Le Ficus Elastica peut tol\xe9rer des niveaux de lumi\xe8re plus faibles, mais sa croissance sera plus lente et ses feuilles pourraient devenir moins brillantes. Il est important de maintenir le sol l\xe9g\xe8rement humide, en laissant la surface s\xe9cher entre les arrosages pour \xe9viter l'exc\xe8s d'eau qui pourrait entra\xeener la pourriture des racines. Le Ficus Elastica est \xe9galement appr\xe9ci\xe9 pour sa capacit\xe9 \xe0 purifier l'air. Il aide \xe0 \xe9liminer les toxines telles que le formald\xe9hyde, contribuant \xe0 un environnement int\xe9rieur plus sain. De plus, cette plante peut atteindre une hauteur impressionnante, souvent entre 1,5 et 3 m\xe8tres en int\xe9rieur, ce qui en fait un point focal id\xe9al dans une pi\xe8ce. La multiplication du Ficus Elastica peut se faire par bouturage des tiges. Coupez une tige avec plusieurs feuilles et placez-la dans l'eau ou directement dans le sol pour qu'elle prenne racine. En r\xe9sum\xe9, le Ficus Elastica est une plante d'int\xe9rieur imposante et facile \xe0 vivre, parfaite pour ajouter une touche de verdure luxuriante \xe0 votre espace. Sa facilit\xe9 d'entretien, ses bienfaits pour la qualit\xe9 de l'air et son esth\xe9tique \xe9l\xe9gante en font un choix populaire parmi les amateurs de plantes.", "Cl\xe9ment Lapointe", "07 septembre 2024", "Temps de lecture: 3 min.", "300 mots"),
    new Article("Le Calathea", "./assets/img/mobile/calathea_mobile.jpg", "./assets/img/desktop/calathea.jpg", "Le Calathea est une plante d'int\xe9rieur tropicale renomm\xe9e pour ses feuilles magnifiquement d\xe9cor\xe9es. Originaire des for\xeats tropicales d'Am\xe9rique du Sud, ses feuilles pr\xe9sentent des motifs complexes de vert, de violet et parfois de rose, qui ajoutent une touche de sophistication et d'exotisme \xe0 tout int\xe9rieur. Cette plante pr\xe9f\xe8re une lumi\xe8re indirecte et mod\xe9r\xe9e. Une exposition directe au soleil peut br\xfbler ses feuilles d\xe9licates. Elle n\xe9cessite une humidit\xe9 \xe9lev\xe9e, ce qui peut \xeatre assur\xe9 par des vaporisations r\xe9guli\xe8res ou l'utilisation d'un humidificateur. Le Calathea appr\xe9cie \xe9galement un sol constamment humide mais non d\xe9tremp\xe9, donc des arrosages r\xe9guliers sont essentiels. Le Calathea est connu pour ses habitudes de mouvement uniques. Le soir, ses feuilles se redressent comme des mains en pri\xe8re, et se red\xe9ploient le matin, un ph\xe9nom\xe8ne qui ajoute une dimension vivante \xe0 votre espace. Cette plante est \xe9galement non toxique pour les animaux de compagnie, ce qui en fait un choix s\xfbr pour les foyers avec des animaux. Pour multiplier un Calathea, la division des racines est la m\xe9thode la plus courante. Lors du rempotage, s\xe9parez d\xe9licatement les racines et plantez les divisions dans des pots s\xe9par\xe9s. En r\xe9sum\xe9, le Calathea est une plante d'int\xe9rieur qui, avec un peu d'attention, peut prosp\xe9rer et devenir un point focal spectaculaire dans votre", "Cl\xe9ment Lapointe", "10 juillet 2022", "Temps de lecture: 3 min.", "300 mots"),
    new Article("L'Aloe Vera", "./assets/img/mobile/aloevera_mobile.jpg", "./assets/img/desktop/aloevera.jpg", "L'Aloe Vera, souvent simplement appel\xe9 aloe, est une plante succulente renomm\xe9e pour ses nombreuses propri\xe9t\xe9s m\xe9dicinales et cosm\xe9tiques. Originaire des r\xe9gions arides d'Afrique, l'Aloe Vera se distingue par ses longues feuilles charnues et dentel\xe9es, remplies d'un gel transparent riche en vitamines, min\xe9raux et enzymes. Cette plante est extr\xeamement facile \xe0 entretenir, ce qui la rend id\xe9ale pour les jardiniers d\xe9butants. L'Aloe Vera pr\xe9f\xe8re une lumi\xe8re vive et indirecte et peut tol\xe9rer quelques heures de soleil direct par jour. Elle n\xe9cessite un sol bien drain\xe9 et doit \xeatre arros\xe9e avec parcimonie, en laissant le sol s\xe9cher compl\xe8tement entre les arrosages pour \xe9viter la pourriture des racines. L'un des aspects les plus appr\xe9ci\xe9s de l'Aloe Vera est son gel, utilis\xe9 depuis des mill\xe9naires pour traiter diverses affections cutan\xe9es telles que les br\xfblures, les coupures et les irritations. Pour extraire le gel, il suffit de couper une feuille \xe0 la base et de presser le gel directement sur la peau. En plus de ses bienfaits cutan\xe9s, l'Aloe Vera a \xe9galement des propri\xe9t\xe9s purificatrices d'air, aidant \xe0 \xe9liminer les toxines comme le formald\xe9hyde et le benz\xe8ne de l'environnement int\xe9rieur. La multiplication de l'Aloe Vera est simple et se fait par la s\xe9paration des rejets, aussi appel\xe9s \xab b\xe9b\xe9s \xbb, qui poussent \xe0 la base de la plante m\xe8re. Ces rejets peuvent \xeatre plant\xe9s dans des pots s\xe9par\xe9s pour produire de nouvelles plantes. En r\xe9sum\xe9, l'Aloe Vera est une plante d'int\xe9rieur polyvalente et b\xe9n\xe9fique qui apporte non seulement une touche de verdure, mais offre \xe9galement de nombreux avantages pour la sant\xe9 et le bien-\xeatre. Sa facilit\xe9 d'entretien et ses propri\xe9t\xe9s m\xe9dicinales en font un ajout pr\xe9cieux \xe0 toute collection de plantes.", "Cl\xe9ment Lapointe", "4 avril 2019", "Temps de lecture: 3 min.", "300 mots"),
    new Article("Le Dracaena", "./assets/img/mobile/dracaena_mobile.jpg", "./assets/img/desktop/dracaena.jpg", "Le Dracaena, commun\xe9ment appel\xe9 dragonnier, est une plante d'int\xe9rieur appr\xe9ci\xe9e pour sa robustesse et son \xe9l\xe9gance. Originaire des r\xe9gions tropicales d'Afrique, cette plante se caract\xe9rise par ses tiges \xe9lanc\xe9es et ses feuilles longues et arqu\xe9es, souvent bord\xe9es de rouge, de jaune ou de cr\xe8me. Cette plante est id\xe9ale pour les amateurs de plantes \xe0 la recherche d'une option peu exigeante. Le Dracaena prosp\xe8re dans des conditions de lumi\xe8re indirecte mod\xe9r\xe9e \xe0 vive, bien qu'il puisse tol\xe9rer des niveaux de lumi\xe8re plus faibles. Il est important de maintenir le sol l\xe9g\xe8rement humide, mais il est \xe9galement essentiel de laisser s\xe9cher la couche sup\xe9rieure du sol entre les arrosages pour \xe9viter l'exc\xe8s d'eau. Le Dracaena est reconnu pour ses propri\xe9t\xe9s d\xe9polluantes. Il aide \xe0 \xe9liminer diverses toxines de l'air, comme le formald\xe9hyde, le trichlor\xe9thyl\xe8ne et le benz\xe8ne, ce qui en fait un choix id\xe9al pour am\xe9liorer la qualit\xe9 de l'air int\xe9rieur. De plus, cette plante est non toxique pour les animaux de compagnie, ce qui en fait une option s\xfbre pour les foyers avec des animaux. La propagation du Dracaena est relativement simple et peut se faire par bouturage des tiges. Il suffit de couper une section de la tige principale, de retirer quelques feuilles \xe0 la base et de la placer dans l'eau ou directement dans le sol pour qu'elle d\xe9veloppe des racines. En conclusion, le Dracaena est une plante d'int\xe9rieur versatile et d\xe9corative qui, avec un minimum de soins, peut prosp\xe9rer et ajouter une touche de verdure \xe9l\xe9gante \xe0 n'importe quel espace. Ses propri\xe9t\xe9s d\xe9polluantes et sa facilit\xe9 d'entretien en font un choix populaire parmi les amateurs de plantes.", "Cl\xe9ment Lapointe", "20 mars 2018", "Temps de lecture: 1 min.", "250 mots")
];
const main = document.createElement("main");
body.appendChild(main);
const cardsContainer = document.createElement("ul");
cardsContainer.classList.add("card__container");
main.appendChild(cardsContainer);
cards.forEach((card)=>{
    cardsContainer.appendChild(card.toHtml());
});
const articleContainer = document.createElement("ul");
articleContainer.classList.add("article__container");
main.appendChild(articleContainer);
articleDialogs.forEach((article)=>{
    articleContainer.appendChild(article.toHtml());
});
function showArticle(btn) {
    const fullArticles = document.querySelectorAll(".article__dialog");
    fullArticles.forEach((article)=>{
        if (btn.id === article.id) article.classList.toggle("hidden");
    });
}
const button = document.createElement("button");
main.appendChild(button);
button.classList.add("toggleView__btn");
button.textContent = "Changer la disposition";
const toggleBtn = document.querySelector(".toggleView__btn");
const container = document.querySelector(".card__container");
toggleBtn.addEventListener("click", ()=>{
    container.classList.toggle("displayChange");
});

//# sourceMappingURL=index.3babdcba.js.map
