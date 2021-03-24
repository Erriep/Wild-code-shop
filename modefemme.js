const womanProducts = [
    {
        product :"Manteau Femme",
        price :39.99,
        picture :"img/manteaufemme.JPG",
        link : "produitfemme.html"
    },
    {
        product :"Polo",
        price : 19.99,
        picture : "img/poloRose.JPG",
        link : ""
    },
    {
        product :"T-Shirt",
        price : 14.99,
        picture : "img/T-shirtfemme.JPG",
        link : ""
    },
    {
        product :"T-Shirt",
        price : 14.99,
        picture : "img/T-shirtnoir.JPG",
        link : ""
    },
    {
        product :"Manteau",
        price : 49.99,
        picture : "img/manteaugris.JPG",
        link : ""
    },
    {
        product :"Sweat",
        price : 29.99,
        picture : "img/SweatRose.JPG",
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


    for (let i=0; i < womanProducts.length; i++){
        createProduct(womanProducts[i].product, womanProducts[i].price, womanProducts[i].picture, womanProducts[i].link);
    }