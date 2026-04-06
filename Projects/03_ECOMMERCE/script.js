/*
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {id: 1, name: "Product 1", price: 29.99},
        {id: 2, name: "Product 2", price: 19.99},
        {id: 3, name: "Product 3", price: 49.99},
    ];
    const cart = [];
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
    productList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });
    function addToCart(product) {
        cart.push(product);
        renderCart();
    }
    function renderCart() {
        cartItems.innerHTML = "";
        let totalPrice = 0;
        if(cart.length > 0) {
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove('hidden');
            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement('div');
                cartItem.innerHTML = `
                ${item.name} - $${item.price.toFixed(2)}`
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
            })
        } else {
            emptyCartMessage.classList.remove("hidden");
            totalPriceDisplay.textContent = `$0.00`;
        }
        checkOutBtn.addEventListener('click', () => {
            cart.length = 0;
            alert("Checkout successfully");
            renderCart()
        })
    }
});
*/
// script.js
// script.js

// Sample product data
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 59.99,
        image: "https://via.placeholder.com/400x200?text=Headphones"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 89.99,
        image: "https://via.placeholder.com/400x200?text=Smart+Watch"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 39.99,
        image: "https://via.placeholder.com/400x200?text=Speaker"
    }
];

// Cart array
let cart = [];

// Load products dynamically
const productList = document.getElementById("product-list");

products.forEach(product => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");

    productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productEl);
});

// Add to cart function
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    const emptyMsg = document.getElementById("empty-cart");
    const totalEl = document.getElementById("cart-total");
    const totalPriceEl = document.getElementById("total-price");

    // Clear previous cart items
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
        emptyMsg.style.display = "block";
        totalEl.classList.add("hidden");
        return;
    }

    emptyMsg.style.display = "none";
    totalEl.classList.remove("hidden");

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    totalPriceEl.textContent = `$${total.toFixed(2)}`;
}
