
function addToCart(name, imageSrc, price) {
  
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
       
        cart[existingItemIndex].quantity += 1;
    } else {
        
        cart.push({
            name: name,
            imageSrc: imageSrc,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${name} has been added to your cart.`);
}


function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartGrid = document.getElementById("cart-grid");
    const subtotalElement = document.getElementById("subtotal");

    cartGrid.innerHTML = "";
    let subtotal = 0;

    
    const isInSubfolder = window.location.pathname.includes('/pages/'); 

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        
        const div = document.createElement("div");
        div.className = "cart-item";
        const imageBasePath = isInSubfolder ? '../assets/' : './assets/';
        let imagePath = imageBasePath + item.imageSrc.replace('./assets/', '');
        

        div.innerHTML = `
            <img src="${imagePath}" alt="${item.name}" class="cart-item-image">
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



function updateQuantity(index, action) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (action === "plus") {
        cart[index].quantity += 1;
    } else if (action === "minus" && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    }


    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);


    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}


if (window.location.pathname.includes('/cart')) {
    window.onload = displayCart;
}
