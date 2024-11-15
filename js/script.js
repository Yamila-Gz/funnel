// script.js
let cart = [];
let totalPrice = 0;

function nextStep(step) {
    document.querySelectorAll('.step').forEach(el => el.style.display = 'none');
    document.getElementById(step).style.display = 'block';
}

function submitForm(event) {
    event.preventDefault();
    nextStep('thankyou');
}

function addToCart(productName, productPrice) {
    cart.push({ productName, productPrice });
    totalPrice += productPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.productPrice}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = totalPrice;
}

