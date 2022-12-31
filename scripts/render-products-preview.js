// fetch the watch data from our server
const response = await fetch("/watches.json");
let watches = await response.json();
watches = watches.slice(0, 3);

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
    // add the card to the grid
    grid.appendChild(card);
}