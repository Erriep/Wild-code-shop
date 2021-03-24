const accProducts = [
    {
        product :"Tapis de souris",
        price :14.99,
        picture :"img/Tapis_souris.JPG",
        link : "produitaccessoire.html"
    },
    {
        product :"Clé USB",
        price : 9.99,
        picture : "img/cléUSB.JPG",
        link : ""
    },
    {
        product :"Sac en tissu",
        price : 4.99,
        picture : "img/sac.JPG",
        link : ""
    },
    {
        product :"Sac à dos",
        price : 29.99,
        picture : "img/sacàdos.JPG",
        link : ""
    },
    {
        product :"Stylo",
        price : 2.99,
        picture : "img/stylo.JPG",
        link : ""
    },
    {
        product :"Mug",
        price : 7.99,
        picture : "img/mug.JPG",
        link : ""
    }

];

const productGrid = document.querySelector(".product-grid");

const createProduct = (manProduct, manPrice, imageURL, linkToProduct) => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");
    productGrid.appendChild(imgContainer);

    const pageLink = document.createElement("a");
    pageLink.href =`${linkToProduct}`;
    imgContainer.appendChild(pageLink);
    pageLink.addEventListener("mouseover", ()=>{
        pageLink.style.transform = "scale(1)";
    })
    pageLink.addEventListener("mouseleave", ()=>{
        pageLink.style.transform = "scale(0.85)";
    })

    const imgProduct = document.createElement("div");
    imgProduct.style.backgroundImage = `url(${imageURL})`;
    imgProduct.classList.add("img-product");
    pageLink.appendChild(imgProduct);

    const productTitle = document.createElement("h4");
    productTitle.classList.add("product-title");
    productTitle.innerHTML = `${manProduct}`;
    pageLink.appendChild(productTitle);

    const productPrice = document.createElement("h5");
    productPrice.classList.add("product-price");
    productPrice.innerHTML = `${manPrice}`;
    pageLink.appendChild(productPrice);
}

    for (let i=0; i < accProducts.length; i++){
        createProduct(accProducts[i].product, accProducts[i].price, accProducts[i].picture, accProducts[i].link);
    }

    