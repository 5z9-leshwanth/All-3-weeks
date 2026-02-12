// Cart array
let cart = [];

// Add item to cart
function addToCart(name, price) {

    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

// Remove item
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCart();
}

// Update quantity
function updateQuantity(name, quantity) {

    let item = cart.find(item => item.name === name);

    if (item) {
        item.quantity = parseInt(quantity);

        if (item.quantity <= 0) {
            removeFromCart(name);
        }
    }

    updateCart();
}

// Update cart display
function updateCart() {

    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = "";

    cart.forEach(item => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - Rs.${item.price} x ${item.quantity}
            <button onclick="removeFromCart('${item.name}')">
                Remove
            </button>
            <input type="number"
                   value="${item.quantity}"
                   min="0"
                   onchange="updateQuantity('${item.name}', this.value)">
        `;

        cartItems.appendChild(li);
    });

    // Calculate total price
    let total = cart.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
    );

    document.getElementById("totalPrice").innerText =
        "Total Price: Rs." + total;
}
