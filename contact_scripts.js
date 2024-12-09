let map;
let marker;
let branches = [];

// Ініціалізація карти
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.44714425970587, lng: 30.53719906515751 },
        zoom: 12
    });

    marker = new google.maps.Marker({
        position: { lat: 50.44714425970587, lng: 30.53719906515751 },
        map: map
    });

    // Завантаження філіалів через AJAX
    fetchBranches();
}

// Завантаження даних філіалів
function fetchBranches() {
    fetch("branches.json")
        .then(response => {
            if (!response.ok) throw new Error("Помилка завантаження даних!");
            return response.json();
        })
        .then(data => {
            branches = data;
            initializeBranchesList();
        })
        .catch(error => {
            console.error(error);
            document.getElementById("branches").innerHTML = "<p>Не вдалося завантажити дані філіалів.</p>";
        });
}

// Створення списку філіалів
function initializeBranchesList() {
    const branchesList = document.getElementById("branches");
    branchesList.innerHTML = "";
    branches.forEach(branch => {
        const listItem = document.createElement("li");
        listItem.textContent = `${branch.name} - ${branch.address}`;
        listItem.setAttribute("data-id", branch.id);
        listItem.classList.add("branch-item");
        branchesList.appendChild(listItem);
    });
}

// Завантаження деталей філіалу
function loadBranchDetails(branchId) {
    const branch = branches.find(b => b.id === branchId);

    if (!branch) return;

    // Оновлення деталей
    document.getElementById("branch-details").innerHTML = `
        <p><strong>Назва:</strong> ${branch.name}</p>
        <p><strong>Адреса:</strong> ${branch.address}</p>
        <p><strong>Години роботи:</strong> ${branch.hours}</p>
        <p><strong>Телефон:</strong> ${branch.phone}</p>
    `;

    // Центрування карти
    map.setCenter(branch.coordinates);
    marker.setPosition(branch.coordinates);

    // Зміна стилю для активного елемента
    document.querySelectorAll(".branch-item").forEach(item => {
        item.classList.remove("active-branch");
    });
    const activeItem = document.querySelector(`[data-id="${branchId}"]`);
    if (activeItem) {
        activeItem.classList.add("active-branch");
    }
}

// Обробник кліків на список філіалів
document.getElementById("branches").addEventListener("click", (e) => {
    const branchId = parseInt(e.target.getAttribute("data-id"));
    if (!isNaN(branchId)) {
        loadBranchDetails(branchId);
    }
});

// Ініціалізація карти при завантаженні
window.onload = initMap;
