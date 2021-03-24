const manProducts = [
    {
        product :"Manteau Homme",
        price :39.99,
        picture :"img/manteau.JPG",
        link : "produithomme.html"
    },
    {
        product :"Sweat",
        price : 29.99,
        picture : "img/Sweathomme.JPG",
        link : ""
    },
    {
        product :"T-Shirt",
        price : 14.99,
        picture : "img/T-shirtblanc.JPG",
        link : ""
    },
    {
        product :"Pull-Over",
        price : 24.99,
        picture : "img/pullzip.JPG",
        link : ""
    },
    {
        product :"Manteau",
        price : 49.99,
        picture : "img/manteauRouge.JPG",
        link : ""
    },
    {
        product :"Polo",
        price : 14.99,
        picture : "img/polobleu.JPG",
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


    for (let i=0; i < manProducts.length; i++){
        createProduct(manProducts[i].product, manProducts[i].price, manProducts[i].picture, manProducts[i].link);
    }



    
