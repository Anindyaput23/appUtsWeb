// shared.js
// Function to adjust layout based on window width
function adjustLayout() {
    const windowWidth = window.innerWidth;
    const itemsContainer = document.getElementById("items");
    if (windowWidth <= 768) {
        // If window width is less than or equal to 768px (tablet/mobile view)
        itemsContainer.style.display = "block";
    } else {
        // If window width is greater than 768px (desktop view)
        itemsContainer.style.display = "grid";
    }
}

// Function to handle login form submission
document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen form dan tombol login
    const loginForm = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-button");

    // Fungsi untuk memeriksa apakah kedua input sudah terisi
    function checkInputs() {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        if (emailValue !== '' && passwordValue !== '') {
            loginButton.removeAttribute('disabled'); // Aktifkan tombol jika kedua input terisi
        } else {
            loginButton.setAttribute('disabled', true); // Nonaktifkan tombol jika salah satu atau kedua input kosong
        }
    }

    // Panggil fungsi checkInputs saat nilai input berubah
    emailInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    // Handle login form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get email and password input values
        const email = emailInput.value;
        const password = passwordInput.value;

        // Check if email and password are correct
        if (email === "anindyaputri231204@gmail.com" && password === "233307065") {
            // Show success message or redirect to order page
            alert("Selamat!Anda Berhasil Login!");
            // Redirect to order page
            window.location.href = "order.html";
        } else {
            // Show error message
            alert("Email atau Password Anda Salah.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const itemsContainer = document.getElementById("items");
    const totalContainer = document.getElementById("total");
    let totalPrice = 0;

    // Function to update total based on selected items
    function updateTotal() {
        totalContainer.textContent = "Total: Rp " + totalPrice.toFixed(3).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    // Function to handle item click
    function handleClick() {
        const price = parseFloat(this.getAttribute("data-price"));
        totalPrice += price; // Add the price to total price
        updateTotal(); // Update total display
        
        // Toggle selected class
        if (!this.classList.contains("selected")) {
            this.classList.add("selected");
        }
    }

    // Add click event listener to each menu item
    itemsContainer.querySelectorAll(".item").forEach(function(item) {
        item.addEventListener("click", handleClick);
    });
});

