// fetch the watch data from our server
const response = await fetch("/watches.json");
const watches = await response.json();

// get the product-cards-grid element
const grid = document.querySelector('.product-cards-grid');

// get the product-card template, remove it from the grid.
const cardTemplate = document.querySelector(".product-card");
grid.removeChild(cardTemplate);

for (let watch of watches) {
    // clone the template
    const card = cardTemplate.cloneNode(true);
    // set the data
    card.querySelector(".product-card-brand").textContent = watch.brand;
    card.querySelector(".product-card-model").textContent = watch.model;
    card.querySelector(".product-card-image").src = watch.image;
    card.querySelector("button").onclick = () => {
        showProduct(watch);
    };
    // add the card to the grid
    grid.appendChild(card);
}

const productOverlay = document.querySelector('.overlay');
const closeProduct = document.querySelector('.close-product');

closeProduct.onclick = () => {
    productOverlay.classList.add("hidden");
}

const showProduct = (watch) => {
    // set the data
    productOverlay.querySelector(".product-brand").textContent = watch.brand;
    productOverlay.querySelector(".product-model").textContent = watch.model;
    productOverlay.querySelector(".product-image").src = watch.image;
    productOverlay.querySelector(".product-price").textContent = `$${watch.price}`;
    // show the overlay
    productOverlay.classList.remove("hidden");
}