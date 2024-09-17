document.addEventListener('DOMContentLoaded', function () {
    const cartItems = [];
    const cartList = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const checkoutBtn = document.getElementById('checkout-btn');

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
            cartList.appendChild(li);
            total += item.price;
        });

        totalPriceEl.textContent = `Rp ${total.toLocaleString()}`;

        if (cartItems.length > 0) {
            emptyCartMessage.style.display = 'none';
            checkoutBtn.disabled = false;
        } else {
            emptyCartMessage.style.display = 'block';
            checkoutBtn.disabled = true;
        }
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const product = this.closest('.product');
            const name = product.getAttribute('data-name');
            const price = parseInt(product.getAttribute('data-price'));

            cartItems.push({ name, price });
            updateCart();
        });
    });
});
