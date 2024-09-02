document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.forEach(item => {
        const minusBtn = item.querySelector('.minus-btn');
        const plusBtn = item.querySelector('.plus-btn');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeBtn = item.querySelector('.like-btn');
        const quantityElement = item.querySelector('.quantity');
        const price = parseFloat(item.dataset.price);

        minusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        plusBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('liked');
        });
    });

    function updateTotalPrice() {
        let total = 0;
        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.dataset.price);
            total += quantity * price;
        });
        totalPriceElement.textContent = total.toFixed(2);
    }

    updateTotalPrice();
});
