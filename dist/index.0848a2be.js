class Product {
    constructor(imgMobile, imgDesktop, titre, description, prix){
        this.imgMobile = imgMobile;
        this.imgDesktop = imgDesktop;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
    }
    toHtml() {
        const li = document.createElement("li");
        li.classList.add("product");
        li.setAttribute("data-search", this.titre);
        const figure = document.createElement("figure");
        li.appendChild(figure);
        const picture = document.createElement("picture");
        figure.appendChild(picture);
        const source = document.createElement("source");
        picture.appendChild(source);
        source.media = "(min-width: 768px)";
        source.srcset = this.imgDesktop;
        const img = document.createElement("img");
        picture.appendChild(img);
        img.src = this.imgMobile;
        const h2 = document.createElement("h2");
        li.appendChild(h2);
        h2.textContent = this.titre;
        const descContainer = document.createElement("div");
        li.appendChild(descContainer);
        descContainer.classList.add("description__container");
        const span = document.createElement("span");
        descContainer.appendChild(span);
        span.textContent = this.prix;
        const p = document.createElement("p");
        descContainer.appendChild(p);
        p.textContent = this.description;
        const button = document.createElement("button");
        descContainer.appendChild(button);
        button.textContent = "Voir le produit";
        return li;
    }
}
const products = [
    new Product("https://picsum.photos/id/140/800/400", "https://picsum.photos/id/140/1600/800", "Monstera deliciosa", "La Monstera deliciosa, souvent appel\xe9e plante gruy\xe8re en raison de ses grandes feuilles perfor\xe9es, est une plante tropicale originaire des for\xeats d'Am\xe9rique centrale.", "\xc0 partir de 39,99$"),
    new Product("https://picsum.photos/id/100/800/400", "https://picsum.photos/id/100/1600/800", "Lavandula angustifolia", "La Lavandula angustifolia, ou lavande vraie, est une plante aromatique m\xe9diterran\xe9enne pris\xe9e pour ses fleurs violettes et son parfum apaisant. Utilis\xe9e en aromath\xe9rapie, cosm\xe9tique et cuisine, elle est aussi populaire dans les jardins pour attirer les pollinisateurs.", "\xc0 partir de 19,99$"),
    new Product("https://picsum.photos/id/101/800/400", "https://picsum.photos/id/101/1600/800", "Ficus lyrata", "Le Ficus lyrata, ou figuier lyre, est une plante d'int\xe9rieur populaire pour ses grandes feuilles vertes en forme de lyre. Originaire des r\xe9gions tropicales d'Afrique de l'Ouest, il peut atteindre des hauteurs impressionnantes, ce qui en fait une pi\xe8ce ma\xeetresse dans la d\xe9coration int\xe9rieure.", "\xc0 partir de 29,99$"),
    new Product("https://picsum.photos/id/102/800/400", "https://picsum.photos/id/102/1600/800", "Aloe vera", "L'Aloe vera est une plante succulente connue pour ses propri\xe9t\xe9s m\xe9dicinales et cosm\xe9tiques. Originaire des r\xe9gions arides, elle poss\xe8de des feuilles charnues remplies d'un gel aux vertus hydratantes et cicatrisantes. Facile \xe0 cultiver, l'Aloe vera pr\xe9f\xe8re un sol bien drain\xe9 et une exposition lumineuse.", "\xc0 partir de 9,99$"),
    new Product("https://picsum.photos/id/103/800/400", "https://picsum.photos/id/103/1600/800", "Sansevieria trifasciata", "La Sansevieria trifasciata, commun\xe9ment appel\xe9e langue de belle-m\xe8re, est une plante d'int\xe9rieur robuste et facile \xe0 entretenir. Originaire d'Afrique de l'Ouest, elle se caract\xe9rise par ses longues feuilles rigides et dress\xe9es, souvent marbr\xe9es de vert et de jaune.", "\xc0 partir de 19,99$"),
    new Product("https://picsum.photos/id/104/800/400", "https://picsum.photos/id/104/1600/800", "Pilea peperomioides", "La Pilea peperomioides, connue sous le nom de plante du missionnaire ou plante \xe0 monnaie chinoise, est appr\xe9ci\xe9e pour ses feuilles rondes et brillantes, ressemblant \xe0 des pi\xe8ces de monnaie. Originaire de Chine, elle est devenue populaire dans le monde entier pour son apparence unique et sa facilit\xe9 de culture.", "\xc0 partir de 29,99$")
];
const main = document.querySelector("main");
const productsContainer = document.createElement("ul");
productsContainer.classList.add("products__container");
main.appendChild(productsContainer);
products.forEach((product)=>{
    productsContainer.appendChild(product.toHtml());
});

//# sourceMappingURL=index.0848a2be.js.map
