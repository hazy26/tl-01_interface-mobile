const body = document.querySelector("body");
function createFooter() {
    const footer = document.createElement("footer");
    body.appendChild(footer);
    const a = document.createElement("a");
    a.href = "./index.html";
    footer.appendChild(a);
    const figure = document.createElement("figure");
    a.appendChild(figure);
    const img = document.createElement("img");
    img.src = "../src/assets/img/icons/logo.png";
    img.alt = "Logo Plantes Exotiques";
    figure.appendChild(img);
    const p = document.createElement("p");
    p.textContent = "\xa9 Plantes Exotiques\u2122";
    a.appendChild(p);
}
createFooter();

//# sourceMappingURL=index.4f492e9b.js.map
