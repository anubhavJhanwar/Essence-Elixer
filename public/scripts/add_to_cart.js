let iconCart = document.querySelector('cart_icon');
let body = document .querySelector('body')

let listcartHTML = document.querySelector('.items');
let listcart = [];

const addDataToHTML = () => {
    if (listcartHTML) { 
        listcartHTML.innerHTML = '';
        if (listcart.length > 0) {
            listcart.forEach(product => {
                let newproduct = document.createElement('div');
                newproduct.classList.add('items');
                newproduct.innerHTML = `
                <div class="product-card">
                    <div class="product-image">
                        <a href="./pages/perfume1.html">
                            <img src="${product.image}" alt="Oud Arabia Perfume">
                        </a>
                    </div>
                    <div class="product-details">
                        <h2>Afnan Supremacy Not Only Intense</h2>
                        <p class="sub-text">Eau de Parfum</p>
                        <div class="rating">
                            <span class="star">&#9733;<p>4.8</p></span>
                            <span class="verified">&#10004;<p>5607</p></span>
                        </div>
                        <div class="product_cost">
                            <i class="fa-solid fa-indian-rupee-sign"></i>
                            <p>3300 Rs</p>
                        </div>
                    </div>
                    <button class="add-to-cart">ADD TO CART</button>
                </div>`;
                
                listcartHTML.appendChild(newproduct);
            });
        }
    } 
};

const initApp = () => {

    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listcart = data; 
        console.log(listcart);
        addDataToHTML();
    })
    .catch(error => console.error("Error fetching JSON data:", error));
}

initApp();
