document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");
    const checkboxContainer = document.getElementById("checkbox-container");
    let totalPrice = 0;

    function updateCart() {
        cartItemsContainer.innerHTML = "";
        checkboxContainer.innerHTML = "";
        totalPrice = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Ваш кошик порожній</p>";
            document.getElementById("total-price").textContent = "Загальна сума: 0 UAH";
            return;
        }

        cart.forEach((item, index) => {
            const row = document.createElement("div");
            row.classList.add("cart-item");
            row.innerHTML = `
                <div>
                    <h3>${item.name}</h3>
                    <p>Ціна: ${item.price} ${item.currency}</p>
                    <p>Кількість: ${item.quantity}</p>
                    <p>Всього: ${item.price * item.quantity} ${item.currency}</p>
                    <button class="delete-item" data-index="${index}">Видалити</button>
                </div>
            `;
            cartItemsContainer.appendChild(row);
            totalPrice += item.price * item.quantity;

            // Додаємо чекбокси для вибору товарів
            const checkbox = document.createElement("div");
            checkbox.innerHTML = `
                <label>
                    <input type="checkbox" value="${item.id}" data-name="${item.name}" data-category="${item.category}">
                    ${item.name}
                </label>
            `;
            checkboxContainer.appendChild(checkbox);
        });

        document.getElementById("total-price").textContent = `Загальна сума: ${totalPrice} UAH`;

        // Додаємо слухачі подій для кнопок "Видалити"
        document.querySelectorAll(".delete-item").forEach(button => {
            button.addEventListener("click", function () {
                const index = parseInt(this.getAttribute("data-index"));
                cart.splice(index, 1); // Видаляємо товар за індексом
                localStorage.setItem("cart", JSON.stringify(cart)); // Оновлюємо localStorage
                updateCart(); // Оновлюємо вміст кошика
            });
        });
    }

    updateCart();

    // Показати форму для порівняння
    document.getElementById("compare-button").addEventListener("click", function () {
        document.getElementById("compare-form").style.display = "block";
    });

    // Виконати порівняння
    document.getElementById("execute-comparison").addEventListener("click", function () {
        const selectedItems = Array.from(document.querySelectorAll("#checkbox-container input:checked"))
            .map(input => cart.find(item => item.id === input.value));

        if (selectedItems.length !== 2) {
            alert("Будь ласка, виберіть рівно два товари для порівняння!");
            return;
        }

        // Перевірка на однакову категорію
        const [item1, item2] = selectedItems;
        if (item1.category !== item2.category) {
            alert("Помилка! Обрані товари належать до різних категорій. Порівняння неможливе.");
            return;
        }

        // Зберегти обрані товари для порівняння
        localStorage.setItem("comparisonItems", JSON.stringify(selectedItems.map(item => item.id)));

        // Перехід на сторінку порівняння
        window.location.href = "comparison.html";
    });
});
