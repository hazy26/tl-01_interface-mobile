class Card {
    constructor(title, imgMobile, imgDesktop, shortDesc) {
        this.title = title;
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
        this.shortDesc = shortDesc;
    };

    toHtml() {
        const li = document.createElement('li');
        li.classList.add('article__card'); 
        li.id = this.title.toLowerCase(); 
        li.setAttribute('data-search', this.title); 

        const h2 = document.createElement('h2');
        h2.textContent = this.title;
        li.appendChild(h2); 

        const figure = document.createElement('figure');
        const picture = document.createElement('picture');
        figure.appendChild(picture);
        li.appendChild(figure);

        const div = document.createElement('div');
        li.appendChild(div); 

        const source = document.createElement('source');
        source.media = '(min-width: 768px)';
        source.srcset = this.imgDesktop;
        const img = document.createElement('img');
        img.src = this.imgMobile;
        img.alt = 'Une Image';
        picture.appendChild(source);
        picture.appendChild(img);

        const p = document.createElement('p');
        p.textContent = this.shortDesc;
        div.appendChild(p); 

        const btn = document.createElement('button');
        btn.classList.add('article__btn'); 
        btn.id = this.title; 
        btn.textContent = "Voir l'article";
        btn.addEventListener('click', () => {
            showArticle(btn); 
        });
        div.appendChild(btn);

        return li;
    };
};

const cards = [
    new Card(
        "Problèmes rencontrés",
        "https://picsum.photos/id/124/800/600",
        "https://picsum.photos/id/124/1600/1200",
        "Quelques problèmes lors de la création du projets..."
    ),
    new Card(
        "Le Philodendron",
        "https://picsum.photos/id/129/800/600",
        "https://picsum.photos/id/129/1600/1200",
        "Le Philodendron est une plante d'intérieur populaire pour ses feuilles luxuriantes et sa facilité d'entretien. Originaire des forêts tropicales d'Amérique centrale et du Sud, il est parfait pour ajouter une touche de verdure à tout espace."
    ),
    new Card(
        "Le Pothos",
        "https://picsum.photos/id/232/800/600",
        "https://picsum.photos/id/232/1600/1200",
        "Le Pothos, également connu sous le nom de lierre du diable, est une plante d'intérieur très résistante et facile à entretenir. Originaire des îles Salomon, il est apprécié pour ses feuilles brillantes en forme de cœur."
    ),
    new Card(
        "Le Monstera Deliciosa",
        "https://picsum.photos/id/229/800/600",
        "https://picsum.photos/id/229/1600/1200",
        "Le Monstera Deliciosa, également appelé plante gruyère en raison de ses feuilles perforées, est une plante d'intérieur tropicale très populaire. Originaire des forêts tropicales d'Amérique centrale, elle apporte une touche exotique à tout intérieur."
    ),
    new Card(
        "La Sansevieria",
        "https://picsum.photos/id/123/800/600",
        "https://picsum.photos/id/123/1600/1200",
        "La Sansevieria, également connue sous le nom de langue de belle-mère, est une plante succulente résistante, idéale pour les débutants. Elle est célèbre pour ses feuilles érigées et graphiques."
    ),
    new Card(
        "Le Ficus Elastica",
        "https://picsum.photos/id/92/800/600",
        "https://picsum.photos/id/92/1600/1200",
        "Le Ficus Elastica, ou figuier caoutchouc, est une plante d'intérieur imposante avec de grandes feuilles brillantes. Originaire d'Asie du Sud-Est, il est apprécié pour son aspect décoratif et sa facilité d'entretien."
    ),
    new Card(
        "Le Calathea",
        "https://picsum.photos/id/43/800/600",
        "https://picsum.photos/id/43/1600/1200",
        "Le Calathea, connu pour ses magnifiques motifs foliaires, est une plante d'intérieur tropicale qui ajoute une touche de sophistication à tout espace. Originaire des forêts d'Amérique du Sud, il est apprécié pour son feuillage décoratif."
    ),new Card(
        "L'Aloe Vera",
        "https://picsum.photos/id/240/800/600",
        "https://picsum.photos/id/240/1600/1200",
        "L'Aloe Vera est une plante succulente médicinale connue pour ses propriétés apaisantes et cicatrisantes. Originaire des régions arides d'Afrique, elle est facile à entretenir et a de nombreux usages bénéfiques."
    ),
    new Card(
        "Le Dracaena",
        "https://picsum.photos/id/67/800/600",
        "https://picsum.photos/id/67/1600/1200",
        "Le Dracaena, ou dragonnier, est une plante d'intérieur populaire pour ses tiges élancées et ses feuilles arquées. Originaire des régions tropicales d'Afrique, elle est facile à cultiver et à entretenir."
    ),
];

class Article {
    constructor(title, imgMobile, imgDesktop, longDesc, author, date, readingTime, totalWords) {
        this.title = title;
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
        this.longDesc = longDesc;
        this.author = author;
        this.date = date;
        this.readingTime = readingTime;
        this.totalWords = totalWords;
    };

    toHtml() {
        const dialog = document.createElement('li');
        dialog.classList.add('article__dialog', 'hidden');
        dialog.id = this.title; 
        const section = document.createElement('section');
        dialog.appendChild(section); 

        const picture = document.createElement('picture');
        const source = document.createElement('source');
        source.media = "(min-width: 768px)";
        source.srcset = this.imgDesktop;
        picture.appendChild(source);
        const img = document.createElement('img');
        img.src = this.imgMobile;
        picture.appendChild(img);
        section.appendChild(picture);

        const h3 = document.createElement('h3');
        section.appendChild(h3);
        h3.textContent = this.title;

        const h6 = document.createElement('h6');
        section.appendChild(h6);
        h6.textContent = this.readingTime;

        const span = document.createElement('span');
        section.appendChild(span);
        span.textContent = this.totalWords;

        const p = document.createElement('p');
        section.appendChild(p);
        p.textContent = this.longDesc;

        const h4 = document.createElement('h4');
        section.appendChild(h4);
        h4.textContent = this.author;

        const h5 = document.createElement('h5');
        section.appendChild(h5);
        h5.textContent = this.date;

        return dialog;
    }
};

const articleDialogs = [
    new Article(
        "Problèmes rencontrés",
        "https://picsum.photos/id/124/800/600",
        "https://picsum.photos/id/124/1600/1200",
        "Le contenu du premier article doit être à propos des problèmes que vous avez rencontrés et des solutions ou sources qui vous ont permis de les résoudre. Au moins, 250 mots sont attendus. Un lien externe = 1 mot. Le contenu des autres articles n'a pas d’importance",
        "Alexis Turcotte",
        "14 juin 2024",
        "Temps de lecture: 2 min.",
        "250 mots"
    ),
    new Article(
        "Le Philodendron",
        "https://picsum.photos/id/129/800/600",
        "https://picsum.photos/id/129/1600/1200",
        "Le Philodendron est une plante d'intérieur très appréciée pour son feuillage abondant et sa robustesse. Originaire des forêts tropicales d'Amérique centrale et du Sud, cette plante se décline en plusieurs variétés, allant des grandes feuilles en forme de cœur aux petites feuilles découpées, offrant ainsi un large éventail de choix pour les amateurs de plantes. Cette plante est extrêmement facile à entretenir, ce qui en fait un choix parfait pour les débutants. Le Philodendron préfère une lumière indirecte modérée, bien qu'il puisse tolérer des conditions de faible luminosité. En termes d'arrosage, il est important de maintenir le sol légèrement humide, mais de laisser la surface sécher entre les arrosages pour éviter l'excès d'eau. Le Philodendron est également reconnu pour ses propriétés dépolluantes, aidant à éliminer des toxines telles que le formaldéhyde, le benzène et le xylène de l'air intérieur, contribuant",
        "Laurence Désilets",
        "12 novembre 2020",
        "Temps de lecture: 3 min.",
        "300 mots"
    ),
    new Article(
        "Le Pothos",
        "https://picsum.photos/id/232/800/600",
        "https://picsum.photos/id/232/1600/1200",
        "Le Pothos, ou lierre du diable, est une plante d'intérieur extrêmement populaire grâce à sa robustesse et à son entretien minimal. Originaire des îles Salomon, cette plante est reconnue pour ses longues tiges traînantes et ses feuilles en forme de cœur, souvent marbrées de blanc, jaune ou vert pâle. L'un des plus grands atouts du Pothos est sa capacité à survivre dans des conditions de lumière variées, allant de la lumière indirecte vive à des endroits plus ombragés. Cette flexibilité en fait un choix idéal pour presque tous les intérieurs. Le Pothos est également tolérant à des arrosages irréguliers. Il préfère un sol bien drainé et des arrosages modérés, en laissant le sol sécher entre deux arrosages. Outre son esthétique, le Pothos est également reconnu pour ses propriétés dépolluantes. Il aide à éliminer les toxines de l'air, telles que le formaldéhyde et le benzène, contribuant ainsi à un environnement intérieur plus sain. La multiplication du Pothos est simple et se fait par bouturage. Il suffit de couper une tige juste en dessous d'un nœud et de la placer dans l'eau jusqu'à ce que des racines apparaissent. Ensuite, elle peut être transplantée dans du terreau. En résumé, le Pothos est une plante d'intérieur parfaite pour ceux qui cherchent à ajouter une touche de verdure à leur espace sans trop d'effort. Sa robustesse, son adaptabilité et ses bienfaits pour la qualité de l'air en font un choix idéal pour tous, des novices en jardinage aux passionnés de plantes.",
        "Clément Lapointe",
        "22 août 2023",
        "Temps de lecture: 3 min.",
        "300 mots"
    ),
    new Article(
        "Le Monstera Deliciosa",
        "https://picsum.photos/id/229/800/600",
        "https://picsum.photos/id/229/1600/1200",
        "Le Monstera Deliciosa, aussi connu sous le nom de plante gruyère, est une plante tropicale originaire des forêts humides d'Amérique centrale. Ses grandes feuilles brillantes, caractérisées par des perforations naturelles, en font une plante d'intérieur très prisée. En milieu naturel, le Monstera peut grimper jusqu'à 20 mètres, mais en intérieur, il atteint généralement entre 2 et 3 mètres. Pour bien entretenir un Monstera, il est important de le placer dans un endroit lumineux sans exposition directe au soleil. Cette plante apprécie une humidité élevée, ce qui peut être recréé avec des vaporisations régulières d'eau. Un arrosage modéré, laissant le sol sécher entre deux arrosages, est idéal pour éviter les racines gorgées d'eau. Le Monstera Deliciosa est également connu pour ses fruits comestibles dans son habitat naturel, d'où son nom « deliciosa ». Cependant, en intérieur, il est rare de voir la plante fleurir et fructifier. Avec ses propriétés dépolluantes, le Monstera aide à purifier l'air ambiant en absorbant les toxines présentes. Facile à multiplier par bouturage, le Monstera Deliciosa est parfait pour les amateurs de plantes débutants comme expérimentés. Sa croissance rapide et son aspect spectaculaire ajoutent une touche de jungle urbaine à n'importe quel intérieur, faisant de cette plante un choix incontournable pour les passionnés de verdure.",
        "Valérie Piché",
        "1er octobre 2021",
        "Temps de lecture: 3 min.",
        "300 mots"
    ),
    new Article(
        "La Sansevieria",
        "https://picsum.photos/id/123/800/600",
        "https://picsum.photos/id/123/1600/1200",
        "La Sansevieria, plus communément appelée langue de belle-mère, est une plante succulente robuste originaire d'Afrique de l'Ouest. Elle est réputée pour ses feuilles rigides, dressées et souvent marquées de bandes vertes ou jaune vif, qui lui confèrent une apparence graphique et moderne. Cette plante est l'une des plus faciles à entretenir, ce qui en fait un choix parfait pour les débutants. La Sansevieria tolère une large gamme de conditions de lumière, allant de la lumière directe du soleil à des endroits faiblement éclairés. Elle préfère toutefois une lumière indirecte modérée pour une croissance optimale. En termes d'arrosage, elle est extrêmement tolérante à la sécheresse. Il est important de laisser le sol sécher complètement entre les arrosages pour éviter la pourriture des racines. Outre son aspect esthétique et sa facilité d'entretien, la Sansevieria est également connue pour ses propriétés dépolluantes. Elle est capable de filtrer diverses toxines de l'air, telles que le benzène, le formaldéhyde, le trichloréthylène et le xylène, contribuant ainsi à un environnement intérieur plus sain. La propagation de la Sansevieria est également simple et peut se faire par division des rhizomes ou par bouturage des feuilles. Cette plante a une croissance lente mais régulière, et peut s'adapter à divers environnements, ce qui la rend polyvalente pour la décoration intérieure. En conclusion, la Sansevieria est une plante d'intérieur idéale pour ceux qui recherchent une touche de verdure avec un minimum d'effort. Sa robustesse, son esthétique unique et ses bienfaits pour la qualité de l'air en font un choix incontournable pour tout intérieur.",
        "Clément Lapointe",
        "05 février 2021",
        "Temps de lecture: 3 min.",
        "300 mots"
    ),
    new Article(
        "Le Ficus Elastica",
        "https://picsum.photos/id/92/800/600",
        "https://picsum.photos/id/92/1600/1200",
        "Le Ficus Elastica, également connu sous le nom de figuier caoutchouc, est une plante d'intérieur populaire, originaire d'Asie du Sud-Est. Ses grandes feuilles ovales, épaisses et brillantes, souvent de couleur vert foncé, apportent une touche élégante et luxuriante à tout intérieur. Cette plante est relativement facile à entretenir et peut s'adapter à une variété de conditions de lumière, bien qu'elle préfère une lumière indirecte vive. Le Ficus Elastica peut tolérer des niveaux de lumière plus faibles, mais sa croissance sera plus lente et ses feuilles pourraient devenir moins brillantes. Il est important de maintenir le sol légèrement humide, en laissant la surface sécher entre les arrosages pour éviter l'excès d'eau qui pourrait entraîner la pourriture des racines. Le Ficus Elastica est également apprécié pour sa capacité à purifier l'air. Il aide à éliminer les toxines telles que le formaldéhyde, contribuant à un environnement intérieur plus sain. De plus, cette plante peut atteindre une hauteur impressionnante, souvent entre 1,5 et 3 mètres en intérieur, ce qui en fait un point focal idéal dans une pièce. La multiplication du Ficus Elastica peut se faire par bouturage des tiges. Coupez une tige avec plusieurs feuilles et placez-la dans l'eau ou directement dans le sol pour qu'elle prenne racine. En résumé, le Ficus Elastica est une plante d'intérieur imposante et facile à vivre, parfaite pour ajouter une touche de verdure luxuriante à votre espace. Sa facilité d'entretien, ses bienfaits pour la qualité de l'air et son esthétique élégante en font un choix populaire parmi les amateurs de plantes.",
        "Clément Lapointe",
        "07 septembre 2024",
        "Temps de lecture: 3 min.",
        "300 mots"
    ),
    new Article(
        "Le Calathea",
        "https://picsum.photos/id/43/800/600",
        "https://picsum.photos/id/43/1600/1200",
        "Le Calathea est une plante d'intérieur tropicale renommée pour ses feuilles magnifiquement décorées. Originaire des forêts tropicales d'Amérique du Sud, ses feuilles présentent des motifs complexes de vert, de violet et parfois de rose, qui ajoutent une touche de sophistication et d'exotisme à tout intérieur. Cette plante préfère une lumière indirecte et modérée. Une exposition directe au soleil peut brûler ses feuilles délicates. Elle nécessite une humidité élevée, ce qui peut être assuré par des vaporisations régulières ou l'utilisation d'un humidificateur. Le Calathea apprécie également un sol constamment humide mais non détrempé, donc des arrosages réguliers sont essentiels. Le Calathea est connu pour ses habitudes de mouvement uniques. Le soir, ses feuilles se redressent comme des mains en prière, et se redéploient le matin, un phénomène qui ajoute une dimension vivante à votre espace. Cette plante est également non toxique pour les animaux de compagnie, ce qui en fait un choix sûr pour les foyers avec des animaux. Pour multiplier un Calathea, la division des racines est la méthode la plus courante. Lors du rempotage, séparez délicatement les racines et plantez les divisions dans des pots séparés. En résumé, le Calathea est une plante d'intérieur qui, avec un peu d'attention, peut prospérer et devenir un point focal spectaculaire dans votre",
        "Clément Lapointe",
        "10 juillet 2022",
        "Temps de lecture: 3 min.",
        "300 mots"
    ),
    new Article(
        "L'Aloe Vera",
        "https://picsum.photos/id/240/800/600",
        "https://picsum.photos/id/240/1600/1200",
        "L'Aloe Vera, souvent simplement appelé aloe, est une plante succulente renommée pour ses nombreuses propriétés médicinales et cosmétiques. Originaire des régions arides d'Afrique, l'Aloe Vera se distingue par ses longues feuilles charnues et dentelées, remplies d'un gel transparent riche en vitamines, minéraux et enzymes. Cette plante est extrêmement facile à entretenir, ce qui la rend idéale pour les jardiniers débutants. L'Aloe Vera préfère une lumière vive et indirecte et peut tolérer quelques heures de soleil direct par jour. Elle nécessite un sol bien drainé et doit être arrosée avec parcimonie, en laissant le sol sécher complètement entre les arrosages pour éviter la pourriture des racines. L'un des aspects les plus appréciés de l'Aloe Vera est son gel, utilisé depuis des millénaires pour traiter diverses affections cutanées telles que les brûlures, les coupures et les irritations. Pour extraire le gel, il suffit de couper une feuille à la base et de presser le gel directement sur la peau. En plus de ses bienfaits cutanés, l'Aloe Vera a également des propriétés purificatrices d'air, aidant à éliminer les toxines comme le formaldéhyde et le benzène de l'environnement intérieur. La multiplication de l'Aloe Vera est simple et se fait par la séparation des rejets, aussi appelés « bébés », qui poussent à la base de la plante mère. Ces rejets peuvent être plantés dans des pots séparés pour produire de nouvelles plantes. En résumé, l'Aloe Vera est une plante d'intérieur polyvalente et bénéfique qui apporte non seulement une touche de verdure, mais offre également de nombreux avantages pour la santé et le bien-être. Sa facilité d'entretien et ses propriétés médicinales en font un ajout précieux à toute collection de plantes.",
        "Clément Lapointe",
        "4 avril 2019",
        "Temps de lecture: 3 min.",
        "300 mots"
    ),
    new Article(
        "Le Dracaena",
        "https://picsum.photos/id/67/800/600",
        "https://picsum.photos/id/67/1600/1200",
        "Le Dracaena, communément appelé dragonnier, est une plante d'intérieur appréciée pour sa robustesse et son élégance. Originaire des régions tropicales d'Afrique, cette plante se caractérise par ses tiges élancées et ses feuilles longues et arquées, souvent bordées de rouge, de jaune ou de crème. Cette plante est idéale pour les amateurs de plantes à la recherche d'une option peu exigeante. Le Dracaena prospère dans des conditions de lumière indirecte modérée à vive, bien qu'il puisse tolérer des niveaux de lumière plus faibles. Il est important de maintenir le sol légèrement humide, mais il est également essentiel de laisser sécher la couche supérieure du sol entre les arrosages pour éviter l'excès d'eau. Le Dracaena est reconnu pour ses propriétés dépolluantes. Il aide à éliminer diverses toxines de l'air, comme le formaldéhyde, le trichloréthylène et le benzène, ce qui en fait un choix idéal pour améliorer la qualité de l'air intérieur. De plus, cette plante est non toxique pour les animaux de compagnie, ce qui en fait une option sûre pour les foyers avec des animaux. La propagation du Dracaena est relativement simple et peut se faire par bouturage des tiges. Il suffit de couper une section de la tige principale, de retirer quelques feuilles à la base et de la placer dans l'eau ou directement dans le sol pour qu'elle développe des racines. En conclusion, le Dracaena est une plante d'intérieur versatile et décorative qui, avec un minimum de soins, peut prospérer et ajouter une touche de verdure élégante à n'importe quel espace. Ses propriétés dépolluantes et sa facilité d'entretien en font un choix populaire parmi les amateurs de plantes.",
        "Clément Lapointe",
        "20 mars 2018",
        "Temps de lecture: 1 min.",
        "250 mots"
    )

];

const main = document.querySelector('main');    

const button = document.createElement('button');
button.classList.add('toggleView__btn');
button.textContent = 'Changer la disposition';
main.appendChild(button);
const toggleBtn = document.querySelector('.toggleView__btn');
const container = document.querySelector('.card__container');
toggleBtn.addEventListener('click', () => {
    container.classList.toggle('displayChange');
});

const cardsContainer = document.createElement('ul');
cardsContainer.classList.add('card__container');
main.appendChild(cardsContainer);
cards.forEach(card => {
    cardsContainer.appendChild(card.toHtml());
});

const articleContainer = document.createElement('ul');
articleContainer.classList.add('article__container');
main.appendChild(articleContainer);
articleDialogs.forEach(article => {
    articleContainer.appendChild(article.toHtml());
});

function showArticle(btn) {
    const fullArticles = document.querySelectorAll('.article__dialog');
    fullArticles.forEach(article => {
        if (btn.id === article.id) { 
            article.classList.toggle('hidden');
            document.body.classList.add('remove-scrolling');
        };
    });
};