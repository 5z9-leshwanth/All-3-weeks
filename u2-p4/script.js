async function fetchData() {
    const loading = document.getElementById("loading");

    try {
        // Show loading text
        loading.style.display = "block";

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const users = await response.json();
        renderData(users);

    } catch (error) {
        console.error("Error:", error);
        alert("Error fetching data");
    } finally {
        // Hide loading text
        loading.style.display = "none";
    }
}

function renderData(users) {
    const tbody = document.getElementById("dataBody");
    tbody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;

        tbody.appendChild(row);
    });
}

// Run function when page loads
window.onload = fetchData;
