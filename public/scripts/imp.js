// Function to add item to the cart
function addToCart(name, imageSrc, price) {
    // Retrieve the existing cart from localStorage or initialize an empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the exact product is already in the cart based on name and price
    const existingProductIndex = cart.findIndex(item => item.name === name && item.price === price);
    
    if (existingProductIndex !== -1) {
        // If the product is already in the cart, increment the quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If the product is not in the cart, add it as a new item
        cart.push({ name, imageSrc, price, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} has been added to the cart!`);
}

// Function to display cart items on cart.html
// Function to display cart items on cart.ejs
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartGrid = document.getElementById("cart-grid");
    const subtotalElement = document.getElementById("subtotal");

    cartGrid.innerHTML = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        // Create a div for each cart item
        const div = document.createElement("div");
        div.className = "cart-item";

        div.innerHTML = `
            <img src="${item.imageSrc}" alt="${item.name}" class="cart-item-image">
            <span class="cart-item-name">${item.name}</span>
            <div class="cart-item-quantity">
                <button class="quantity-button" onclick="updateQuantity(${index}, 'minus')">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-button" onclick="updateQuantity(${index}, 'plus')">+</button>
            </div>
            <span class="cart-item-price">Rs${item.price}</span>
            <span class="cart-item-total">Total: Rs${itemTotal}</span>
            <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
        `;

        cartGrid.appendChild(div);
    });

    subtotalElement.innerText = `Rs${subtotal.toFixed(2)}`;
}

// Function to update quantity in the cart
function updateQuantity(index, action) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (action === "plus") {
        cart[index].quantity += 1;
    } else if (action === "minus" && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    }

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to remove item from the cart
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);

    // Update cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Display cart items when cart.ejs loads
if (window.location.pathname.includes('/cart')) {
    window.onload = displayCart;
}
