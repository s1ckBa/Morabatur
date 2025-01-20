document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.querySelector("#cart-icon");
    const cartCount = document.querySelector("#cart-count");
    const cartModal = document.querySelector("#cart-modal");
    const cartItemsList = document.querySelector("#cart-items");
    const checkoutButton = document.querySelector("#checkout");
    const closeCartButton = document.querySelector("#close-cart");
    const clearCartButton = document.querySelector("#clear-cart");
    const products = document.querySelectorAll(".product");

    let cart = [];

    
    // Открытие корзины
    cartIcon.addEventListener("click", () => {
        cartModal.style.display = "block";
        updateCartDisplay();
    });

    // Закрытие корзины
    closeCartButton.addEventListener("click", () => {
        cartModal.style.display = "none";
    });

    // Добавление товара в корзину
    products.forEach((product) => {
        const addToCartButton = product.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", () => {
            const name = product.querySelector("h3").textContent;
            const priceText = product.querySelector(".price").textContent;
            const price = parseInt(priceText.replace(/\D/g, "")); // Извлекаем число из текста
            const existingItem = cart.find((item) => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCartDisplay();
        });
    });

    // Обновление отображения корзины
    function updateCartDisplay() {
        cartItemsList.innerHTML = ""; // Очищаем список
        let totalCount = 0;

        cart.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.className = "cart-item";

            const itemName = document.createElement("span");
            itemName.textContent = `${item.name} — ${item.price} руб.`;

            const quantityWrapper = document.createElement("div");
            quantityWrapper.className = "quantity-wrapper";

            const minusButton = document.createElement("button");
            minusButton.textContent = "-";
            minusButton.className = "quantity-btn";
            minusButton.addEventListener("click", () => {
                item.quantity--;
                if (item.quantity === 0) {
                    cart = cart.filter((cartItem) => cartItem.name !== item.name);
                }
                updateCartDisplay();
            });

            const quantityInput = document.createElement("input");
            quantityInput.type = "text";
            quantityInput.value = item.quantity;
            quantityInput.readOnly = true;
            quantityInput.className = "quantity-input";

            const plusButton = document.createElement("button");
            plusButton.textContent = "+";
            plusButton.className = "quantity-btn";
            plusButton.addEventListener("click", () => {
                item.quantity++;
                updateCartDisplay();
            });

            quantityWrapper.appendChild(minusButton);
            quantityWrapper.appendChild(quantityInput);
            quantityWrapper.appendChild(plusButton);

            listItem.appendChild(itemName);
            listItem.appendChild(quantityWrapper);
            cartItemsList.appendChild(listItem);

            totalCount += item.quantity;
        });

        cartCount.textContent = totalCount; // Отображаем общее количество товаров в корзине
    }

    // Кнопка оплаты
    checkoutButton.addEventListener("click", () => {
        if (cart.length > 0) {
            cartModal.style.display = "none";
            alert("Спасибо за покупку! Корзина пуста.");
            cart = [];
            updateCartDisplay();
        } else {
            alert("Корзина пуста. Добавьте товары, чтобы продолжить.");
        }
    });

    // Очистка корзины
    clearCartButton.addEventListener("click", () => {
        cart = [];
        updateCartDisplay();
    });
});