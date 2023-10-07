document.addEventListener('DOMContentLoaded', function () {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    // Array para almacenar los productos en el carrito
    const cart = [];

    // Función para agregar un producto al carrito
    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        updateCart();
    }

    // Función para actualizar la lista de productos en el carrito
    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price}`;
            cartList.appendChild(listItem);
            total += item.price;
        });
        cartTotal.textContent = total.toFixed(2);
    }

    // Evento para agregar un producto al carrito al hacer clic en el botón "Agregar al carrito"
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.parentNode;
            const productName = product.querySelector('h4').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
            addToCart(productName, productPrice);
        });
    });

    // Evento para pagar
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', () => {
        alert(`Total a pagar: $${cartTotal.textContent}`);

    });
});






