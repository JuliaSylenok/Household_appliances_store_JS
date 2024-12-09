document.addEventListener("DOMContentLoaded", function () {
    const comparisonItems = JSON.parse(localStorage.getItem("comparisonItems")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (comparisonItems.length !== 2) {
        alert("Помилка! Не вдалося завантажити товари для порівняння.");
        window.location.href = "cart.html";
        return;
    }

    const itemsToCompare = comparisonItems.map(id => cart.find(item => item.id === id));
    const comparisonContainer = document.getElementById("comparison-container");

    if (itemsToCompare.includes(undefined)) {
        alert("Помилка! Деякі товари не знайдено.");
        window.location.href = "cart.html";
        return;
    }

    comparisonContainer.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Характеристика</th>
                    <th>${itemsToCompare[0].name}</th>
                    <th>${itemsToCompare[1].name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ціна</td>
                    <td>${itemsToCompare[0].price} ${itemsToCompare[0].currency}</td>
                    <td>${itemsToCompare[1].price} ${itemsToCompare[1].currency}</td>
                </tr>
                <tr>
                    <td>Категорія</td>
                    <td>${itemsToCompare[0].category}</td>
                    <td>${itemsToCompare[1].category}</td>
                </tr>
                <tr>
                    <td>Опис</td>
                    <td>${itemsToCompare[0].description}</td>
                    <td>${itemsToCompare[1].description}</td>
                </tr>
            </tbody>
        </table>
    `;
});
