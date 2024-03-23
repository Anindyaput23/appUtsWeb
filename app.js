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


// Function to initialize order feature
function initOrderFeature() {
    // Array to store selected items
    let selectedItems = [];

    // Item click event listener
    document.querySelectorAll(".item").forEach(function(item) {
        item.addEventListener("click", function() {
            // Toggle selected class
            this.classList.toggle("selected");
            // Update selectedItems array
            if (this.classList.contains("selected")) {
                selectedItems.push(parseFloat(this.getAttribute("data-price")));
            } else {
                const index = selectedItems.indexOf(parseFloat(this.getAttribute("data-price")));
                if (index !== -1) {
                    selectedItems.splice(index, 1);
                }
            }
            // Update total
            updateTotal(selectedItems);
        });
    });

    // Function to update total based on selected items
    function updateTotal(items) {
        const totalPrice = items.reduce((acc, curr) => acc + curr, 0);
        document.getElementById("total").textContent = "Total: Rp " + totalPrice.toFixed(3);
    }

    // Function to adjust layout on window resize
    window.addEventListener("resize", adjustLayout);
    adjustLayout(); // Call adjustLayout initially
}

// Function to initialize login feature
function initLoginFeature() {
    // Add event listener to login form
    document.getElementById("login-form").addEventListener("submit", handleLoginFormSubmission);
}

// Initialize features based on the current page
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("login-form")) {
        // If login form exists on the page
        initLoginFeature();
    } else if (document.getElementById("items")) {
        // If items container exists on the page
        initOrderFeature();
    }
});