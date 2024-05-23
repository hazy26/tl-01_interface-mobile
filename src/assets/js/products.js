class Product {
    constructor(
        imgMobile, 
        imgDesktop, 
        titre, 
        description, 
        prix 
    ) {
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
    };

    toHtml() {
        const li = document.createElement('li');
        li.classList.add('product');
        li.setAttribute('data-search', this.titre);

        const figure = document.createElement('figure');
        li.appendChild(figure);
        const picture = document.createElement('picture');
        figure.appendChild(picture);
        const source = document.createElement('source');
        picture.appendChild(source);
        source.media = "(min-width: 768px)";
        source.srcset = this.imgDesktop;
        const img = document.createElement('img');
        picture.appendChild(img);
        img.src = this.imgMobile;

        const h2 = document.createElement('h2');
        li.appendChild(h2);
        h2.textContent = this.titre;

        const descContainer = document.createElement('div');
        li.appendChild(descContainer);
        descContainer.classList.add('description__container');

        const span = document.createElement('span');
        descContainer.appendChild(span);
        span.textContent = this.prix; 

        const p = document.createElement('p');
        descContainer.appendChild(p);
        p.textContent = this.description;

        const button = document.createElement('button');
        descContainer.appendChild(button);
        button.textContent = 'Voir le produit';

        return li;
    };
};

const products = [
    new Product(
        "https://picsum.photos/id/140/800/400",
        "https://picsum.photos/id/140/1600/800",
        "Monstera deliciosa",
        "La Monstera deliciosa, souvent appelée plante gruyère en raison de ses grandes feuilles perforées, est une plante tropicale originaire des forêts d'Amérique centrale.",
        "À partir de 39,99$"
    ),
    new Product(
        "https://picsum.photos/id/100/800/400",
        "https://picsum.photos/id/100/1600/800",
        "Lavandula angustifolia",
        "La Lavandula angustifolia, ou lavande vraie, est une plante aromatique méditerranéenne prisée pour ses fleurs violettes et son parfum apaisant. Utilisée en aromathérapie, cosmétique et cuisine, elle est aussi populaire dans les jardins pour attirer les pollinisateurs.",
        "À partir de 19,99$"
    ),
    new Product(
        "https://picsum.photos/id/101/800/400",
        "https://picsum.photos/id/101/1600/800",
        "Ficus lyrata",
        "Le Ficus lyrata, ou figuier lyre, est une plante d'intérieur populaire pour ses grandes feuilles vertes en forme de lyre. Originaire des régions tropicales d'Afrique de l'Ouest, il peut atteindre des hauteurs impressionnantes, ce qui en fait une pièce maîtresse dans la décoration intérieure.",
        "À partir de 29,99$"
    ),
    new Product(
        "https://picsum.photos/id/102/800/400",
        "https://picsum.photos/id/102/1600/800",
        "Aloe vera",
        "L'Aloe vera est une plante succulente connue pour ses propriétés médicinales et cosmétiques. Originaire des régions arides, elle possède des feuilles charnues remplies d'un gel aux vertus hydratantes et cicatrisantes. Facile à cultiver, l'Aloe vera préfère un sol bien drainé et une exposition lumineuse.",
        "À partir de 9,99$"
    ),
    new Product(
        "https://picsum.photos/id/103/800/400",
        "https://picsum.photos/id/103/1600/800",
        "Sansevieria trifasciata",
        "La Sansevieria trifasciata, communément appelée langue de belle-mère, est une plante d'intérieur robuste et facile à entretenir. Originaire d'Afrique de l'Ouest, elle se caractérise par ses longues feuilles rigides et dressées, souvent marbrées de vert et de jaune.",
        "À partir de 19,99$"
    ),
    new Product(
        "https://picsum.photos/id/104/800/400",
        "https://picsum.photos/id/104/1600/800",
        "Pilea peperomioides",
        "La Pilea peperomioides, connue sous le nom de plante du missionnaire ou plante à monnaie chinoise, est appréciée pour ses feuilles rondes et brillantes, ressemblant à des pièces de monnaie. Originaire de Chine, elle est devenue populaire dans le monde entier pour son apparence unique et sa facilité de culture.",
        "À partir de 29,99$"
    )
];

const main = document.querySelector('main');    
const productsContainer = document.createElement('ul');
productsContainer.classList.add('products__container');
main.appendChild(productsContainer);
products.forEach(product => {
    productsContainer.appendChild(product.toHtml());
    });