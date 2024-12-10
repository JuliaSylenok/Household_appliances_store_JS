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
            ${
                itemsToCompare[0].category === "Пральні машини" && itemsToCompare[1].category === "Пральні машини"
                    ? `
                        <tr>
                            <td>Енергоефективність</td>
                            <td>${itemsToCompare[0].energyEfficiency || "-"}</td>
                            <td>${itemsToCompare[1].energyEfficiency || "-"}</td>
                        </tr>
                        <tr>
                            <td>Максимальне завантаження</td>
                            <td>${itemsToCompare[0].maxLoad || "-"}</td>
                            <td>${itemsToCompare[1].maxLoad || "-"}</td>
                        </tr>
                        <tr>
                            <td>Швидкість віджиму</td>
                            <td>${itemsToCompare[0].spinSpeed || "-"}</td>
                            <td>${itemsToCompare[1].spinSpeed || "-"}</td>
                        </tr>
                    `
                    : itemsToCompare[0].category === "Холодильники" && itemsToCompare[1].category === "Холодильники"
                    ? `
                        <tr>
                            <td>Об'єм</td>
                            <td>${itemsToCompare[0].volume || "-"}</td>
                            <td>${itemsToCompare[1].volume || "-"}</td>
                        </tr>
                        <tr>
                            <td>Енергоефективність</td>
                            <td>${itemsToCompare[0].energyEfficiency || "-"}</td>
                            <td>${itemsToCompare[1].energyEfficiency || "-"}</td>
                        </tr>
                        <tr>
                            <td>Технологія охолодження</td>
                            <td>${itemsToCompare[0].coolingTechnology || "-"}</td>
                            <td>${itemsToCompare[1].coolingTechnology || "-"}</td>
                        </tr>
                    `
                    : itemsToCompare[0].category === "Кухонні плити" && itemsToCompare[1].category === "Кухонні плити"
                    ? `
                        <tr>
                            <td>Тип плити</td>
                            <td>${itemsToCompare[0].type || "-"}</td>
                            <td>${itemsToCompare[1].type || "-"}</td>
                        </tr>
                        <tr>
                            <td>Кількість конфорок</td>
                            <td>${itemsToCompare[0].burners || "-"}</td>
                            <td>${itemsToCompare[1].burners || "-"}</td>
                        </tr>
                        <tr>
                            <td>Об'єм духовки</td>
                            <td>${itemsToCompare[0].ovenVolume || "-"}</td>
                            <td>${itemsToCompare[1].ovenVolume || "-"}</td>
                        </tr>
                    `
                    : `<tr><td colspan="3">Характеристики для даних категорій недоступні.</td></tr>`
            }
        </tbody>
    </table>
`;


});
