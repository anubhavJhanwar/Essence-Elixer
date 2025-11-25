// Selecting elements
let listcartHTML = document.querySelector('.listcart');
let listcart = []; // Array to store products from JSON
let cart = []; // Array to store items added to the cart

// Fetch and render products from JSON
const initApp = () => {
  fetch('product.json')
    .then(response => response.json())
    .then(data => {
      listcart = data;
      addDataToHTML(); // Render products in HTML
    })
    .catch(error => console.error("Error loading JSON data:", error));
};

// Function to render products in HTML
const addDataToHTML = () => {
  listcartHTML.innerHTML = ''; // Clear existing HTML

  listcart.forEach(product => {
    // Create product card
    let newproduct = document.createElement('div');
    newproduct.classList.add('items');
    newproduct.innerHTML = `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <h2>${product.name}</h2>
          <p class="sub-text">${product.type}</p>
          <div class="rating">
            <span class="star">&#9733; <p>${product.rating}</p></span>
            <span class="verified">&#10004; <p>${product.reviews}</p></span>
          </div>
          <div class="product_cost">
            <i class="fa-solid fa-indian-rupee-sign"></i>
            <p>${product.price} Rs</p>
          </div>
        </div>
        <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
      </div>
    `;
    
    listcartHTML.appendChild(newproduct); // Add product to page
  });

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
};

// Function to handle "Add to Cart" button click
const addToCart = (event) => {
  const productId = parseInt(event.target.getAttribute('data-id'));
  const product = listcart.find(item => item.id === productId);

  if (product) {
    cart.push(product); // Add product to cart
    console.log("Cart:", cart);
    alert(`${product.name} has been added to the cart.`);
  }
};

// Initialize app
initApp();
