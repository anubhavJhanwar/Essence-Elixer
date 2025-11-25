document.addEventListener('DOMContentLoaded', function() {
    const generateProductCards = (products) => {
        const container = document.querySelector(".items");
        if (!container) {
            console.error("Error: .items not found in the DOM.");
            return;
        }
        
        // Clear the container to avoid duplicates
        console.log('Clearing container');
        container.innerHTML = '';

        products.forEach(product => {
            const card = document.createElement("div");
            const productObj = new Product(
                product.id,
                product.name,
                product.cost,
                product.category,
                product.rating,
                product.reviews,
                product.url,
                product.img
            );
            card.innerHTML = productObj.generateCard();
            console.log(`Appending product: ${product.name}`);
            container.appendChild(card);
        });
    };

    const isInSubfolder = window.location.pathname.includes('/pages/');
    const jsonPath = isInSubfolder ? '/main.json' : './main.json';
    const imageBasePath = isInSubfolder ? '../assets/' : './assets/';

    const start = 9;

    console.log(`Fetching JSON data from: ${jsonPath}`);
    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            console.log('JSON data fetched:', data);
            const productsToDisplay = data.products.slice(start, start+9);
            productsToDisplay.forEach(product => {
                product.img = imageBasePath + product.img.replace('./assets/', '');
            });
            generateProductCards(productsToDisplay);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});

class Product {
    constructor(id, name, cost, category, rating, reviews, url, img) {
      this.id = id;
      this.name = name;
      this.cost = cost;
      this.category = category;
      this.rating = rating;
      this.reviews = reviews;
      this.url = url;
      this.img = img;
    }
  
    generateCard() {
      return `
        <div class="product-card">
          <div class="product-image">
            <a href="${this.url}">
              <img src="${this.img}" alt="${this.name}">
            </a>
          </div>
          <div class="product-details">
            <h2>${this.name}</h2>
            <p class="sub-text">${this.category}</p>
            <div class="rating">
              <span class="star">&#9733; <p>${this.rating}</p></span>
              <span class="verified">&#10004; <p>${this.reviews}</p></span>
            </div>
            <div class="product_cost">
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <p>${this.cost} Rs</p>
            </div>
          </div>
          <button onclick="addToCart('${this.name}', '${this.img}', ${this.cost})" class="add-to-cart">ADD TO CART</button>
        </div>
      `;
    }
}
