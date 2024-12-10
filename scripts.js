const products = [
    {
        id: "LG_F2J3HS0W",
        name: "Пральна машина LG F2J3HS0W",
        price: 10000,
        currency: "UAH",
        description: "Пральна машина LG F2J3HS0W з технологією інтелектуального прання.",
        image: "../images/images_1/LG_F2J3HS0W.jpg",
        category: "Пральні машини",
        energyEfficiency: "A+++",
        maxLoad: "7 кг",
        spinSpeed: "1200 об/хв"
    },
    {
        id: "LG_F2J3HS8J",
        name: "Пральна машина LG F2J3HS8J",
        price: 12500,
        currency: "UAH",
        description: "Пральна машина LG F2J3HS8J з технологією інтелектуального прання.",
        image: "../images/images_2/LG_F2J3HS8J.jpg",
        category: "Пральні машини",
        energyEfficiency: "A+++",
        maxLoad: "8 кг",
        spinSpeed: "1400 об/хв"
    },
    {
        id: "LG_F2J3HS2W",
        name: "Пральна машина LG F2J3HS2W",
        price: 9500,
        currency: "UAH",
        description: "Пральна машина LG F2J3HS2W з технологією інтелектуального прання.",
        image: "../images/images_3/LG_F2J3HS2W.jpg",
        category: "Пральні машини",
        energyEfficiency: "A++",
        maxLoad: "6 кг",
        spinSpeed: "1000 об/хв"
    },
    {
        id: "LG_FH0J3NDN0",
        name: "Пральна машина LG FH0J3NDN0",
        price: 11000,
        currency: "UAH",
        description: "Пральна машина LG FH0J3NDN0 з технологією інтелектуального прання.",
        image: "../images/images_4/LG_FH0J3NDN0.jpg",
        category: "Пральні машини",
        energyEfficiency: "A+++",
        maxLoad: "7 кг",
        spinSpeed: "1200 об/хв"
    },
    {
        id: "BOSCH_KGN39UL316",
        name: "Холодильник BOSCH KGN39UL3160",
        price: 15000,
        currency: "UAH",
        description: "Холодильник BOSCH KGN39UL3160 з системою No Frost.",
        image: "../images/BOSCH_KGN39UL3160/BOSCH_KGN39UL3160_1.jpg",
        category: "Холодильники",
        volume: "368 л",
        energyEfficiency: "A++",
        coolingTechnology: "No Frost"
    },
    {
        id: "BOSCH_KGN39VW316",
        name: "Холодильник BOSCH KGN39VW316",
        price: 18000,
        currency: "UAH",
        description: "Холодильник BOSCH KGN39VW316 з технологією MultiAirFlow.",
        image: "../images/BOSCH_KGN39VW316/BOSCH_KGN39VW316_1.jpg",
        category: "Холодильники",
        volume: "400 л",
        energyEfficiency: "A++",
        coolingTechnology: "No Frost, MultiAirFlow"
    },
    {
        id: "BOSCH_KGN39XI326",
        name: "Холодильник BOSCH KGN39XI326",
        price: 13000,
        currency: "UAH",
        description: "Холодильник BOSCH KGN39XI326 з технологією VitaFresh.",
        image: "../images/BOSCH_KGN39XI326/BOSCH_KGN39XI326_1.jpg",
        category: "Холодильники",
        volume: "366 л",
        energyEfficiency: "A++",
        coolingTechnology: "VitaFresh"
    },
    {
        id: "BOSCH_KGN39XW326",
        name: "Холодильник BOSCH KGN39XW326",
        price: 16500,
        currency: "UAH",
        description: "Холодильник BOSCH KGN39XW326 з системою EcoAirFlow.",
        image: "../images/BOSCH_KGN39XW326/BOSCH_KGN39XW326_1.jpg",
        category: "Холодильники",
        volume: "390 л",
        energyEfficiency: "A++",
        coolingTechnology: "EcoAirFlow"
    },
    {
        id: "BEKO_FSM52332DWDS",
        name: "Кухонна плита BEKO FSM52332DWDS",
        price: 7500,
        currency: "UAH",
        description: "Кухонна плита BEKO FSM52332DWDS з функцією конвекції.",
        image: "../images/BEKO_FSM52332DWDS/BEKO_FSM52332DWDS_1.jpg",
        category: "Кухонні плити",
        type: "газова",
        burners: "4",
        ovenVolume: "55 л"
    },
    {
        id: "BEKO_FSG52020FW",
        name: "Кухонна плита BEKO FSG52020FW",
        price: 8200,
        currency: "UAH",
        description: "Кухонна плита BEKO FSG52020FW з газовою духовкою.",
        image: "../images/BEKO_FSG52020F/BEKO_FSG52020F_1.jpg",
        category: "Кухонні плити",
        type: "газова",
        burners: "4",
        ovenVolume: "60 л"
    },
    {
        id: "BEKO_FSS52020DW",
        name: "Кухонна плита BEKO FSS52020DW",
        price: 9000,
        currency: "UAH",
        description: "Кухонна плита BEKO FSS52020DW з електричною духовкою.",
        image: "../images/BEKO_FSS52020DW/BEKO_FSS52020DW_1.jpg",
        category: "Кухонні плити",
        type: "комбінована",
        burners: "4",
        ovenVolume: "65 л"
    },
    {
        id: "BEKO_FSM62120DW",
        name: "Кухонна плита BEKO FSM62120DW",
        price: 10000,
        currency: "UAH",
        description: "Кухонна плита BEKO FSM62120DW з електричним грилем.",
        image: "../images/BEKO_FSM62120DW/BEKO_FSM62120DW_1.jpg",
        category: "Кухонні плити",
        type: "комбінована",
        burners: "4",
        ovenVolume: "70 л"
    }
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


