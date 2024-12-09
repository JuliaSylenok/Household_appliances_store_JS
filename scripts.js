
const products = [
    {
        id: "LG_F2J3HS0W",
        name: "Пральна машина LG F2J3HS0W",
        price: 10000,
        currency: "UAH",
        description: "Пральна машина LG F2J3HS0W з технологією інтелектуального прання.",
        image: "../images/images_1/LG_F2J3HS0W.jpg",
        category: "Пральні машини"
    },
    {
        id: "LG_F2J3HS8J",
        name: "Пральна машина LG F2J3HS8J",
        price: 12500,
        currency: "UAH",
        description: "Пральна машина LG F2J3HS8J з технологією інтелектуального прання.",
        image: "../images/images_2/LG_F2J3HS8J.jpg",
        category: "Пральні машини"
    },
    {
        id: "LG_F2J3HS2W",
        name: "Пральна машина LG F2J3HS2W",
        price: 9500,
        currency: "UAH",
        description: "Пральна машина LG F2J3HS2W з технологією інтелектуального прання.",
        image: "../images/images_3/LG_F2J3HS2W.jpg",
        category: "Пральні машини"
    },
    {
        id: "LG_FH0J3NDN0",
        name: "Пральна машина LG FH0J3NDN0",
        price: 11000,
        currency: "UAH",
        description: "Пральна машина LG FH0J3NDN0 з технологією інтелектуального прання.",
        image: "../images/images_4/LG_FH0J3NDN0.jpg",
        category: "Пральні машини"
    },



    {
        id: "BOSCH_KGN39UL316",
        name: "Пральна машина BOSCH KGN39UL3160",
        price: 15000,
        currency: "UAH",
        description: "Холодильник BOSCH KGN39UL3160 ",
        image: "../images/BOSCH_KGN39UL3160/BOSCH_KGN39UL3160_1.jpg",
        category: "Холодильник"
    },
    {
        id: "BOSCH_KGN39VW316",
        name: "Пральна машина BOSCH KGN39VW316",
        price: 18000,
        currency: "UAH",
        description: "Холодильник BOSCH KGN39VW316 ",
        image: "../images/BOSCH_KGN39VW316/BOSCH_KGN39VW316_1.jpg",
        category: "Холодильник"
    },
    {
        id: "BOSCH_KGN39XI326",
        name: "Пральна машина BOSCH KGN39XI326",
        price: 13000,
        currency: "UAH",
        description: "Холодильник BOSCH KGN39XI326 ",
        image: "../images/BOSCH_KGN39XI326/BOSCH_KGN39XI326_1.jpg",
        category: "Холодильник"
    },
    {
        id: "BOSCH_KGN39XW326",
        name: "Пральна машина BOSCH KGN39XW326",
        price: 16500,
        currency: "UAH",
        description: "Холодильник BOSCH KGN39XW326 ",
        image: "../images/BOSCH_KGN39XW326/BOSCH_KGN39XW326_1.jpg",
        category: "Холодильник"
    },


    {
        id: "BEKO_FSM52332DWDS",
        name: "Пральна машина BEKO FSM52332DWDS",
        price: 7500,
        currency: "UAH",
        description: "Холодильник BEKO FSM52332DWDS ",
        image: "../images/BEKO_FSM52332DWDS/BEKO_FSM52332DWDS_1.jpg",
        category: "Кухонні плити"
    },
    {
        id: "BEKO_FSG52020FW",
        name: "Пральна машина BEKO FSG52020FW",
        price: 8200,
        currency: "UAH",
        description: "Холодильник BEKO FSG52020FW ",
        image: "../images/BEKO_FSG52020F/BEKO_FSG52020F_1.jpg",
        category: "Кухонні плити"
    },
    {
        id: "BEKO_FSS52020DW",
        name: "Пральна машина BEKO FSS52020DW",
        price: 9000,
        currency: "UAH",
        description: "Холодильник BEKO FSS52020DW ",
        image: "../images/BEKO_FSS52020DW/BEKO_FSS52020DW_1.jpg",
        category: "Кухонні плити"
    },
    {
        id: "BEKO_FSM62120DW",
        name: "Пральна машина BEKO FSM62120DW",
        price: 10000,
        currency: "UAH",
        description: "Холодильник BEKO FSM62120DW ",
        image: "../images/BEKO_FSM62120DW/BEKO_FSM62120DW_1.jpg",
        category: "Кухонні плити"
    },
    // Додаткові товари можна додати тут
];

// Функція для додавання товару в кошик
document.querySelector(".add-to-cart").addEventListener("click", function (event) {
    const productId = event.target.getAttribute("data-product-id");

    // Знайти товар за ID
    const product = products.find(item => item.id === productId);

    if (product) {
        // Отримуємо поточний кошик з localStorage або створюємо новий
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Перевірка, чи є товар в кошику
        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            // Якщо товар вже є, збільшуємо кількість
            existingProduct.quantity += 1;
        } else {
            // Додаємо новий товар
            cart.push({ ...product, quantity: 1 });
        }

        // Зберігаємо оновлений кошик
        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Товар додано в кошик!");
    } else {
        alert("Товар не знайдено!");
    }
});


