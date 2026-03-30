// Numeric addition
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

// String concatenation
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

// Function definition
function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

// Function calls
sumnPrint(x, y);
sumnPrint(A, B);

// Conditional statement
if (C.length > z) {

    // Nested condition check
    if (C.length < z) {
        console.log(z);
    }
    // End of nested check block

} else {
    // Code block for initial condition false
    if (C.length < z) {
        console.log(z);
    } else {
        console.log("good job!");
    }
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

//findTheBanana(L1);
//findTheBanana(L2);

function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

//findTheBananaForEach(L1);
//findTheBananaForEach(L2);

// Time-based greeting
var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        if (x < 5 || x >= 20) {
            greetingElement.innerHTML = "Good night";
        } else if (x < 12) {
            greetingElement.innerHTML = "Good morning";
        } else if (x < 18) {
            greetingElement.innerHTML = "Good afternoon";
        } else {
            greetingElement.innerHTML = "Good evening";
        }
    }
}

greeting(hour);

function addYear() {
    var year = new Date().getFullYear();
    var yearElement = document.getElementById("copyYear");

    if (yearElement) {
        yearElement.innerHTML = "© " + year + " MonoMuse Museum";
    }
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();

        if (currentPage === linkPage) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

$("#readLess").click(function(){ 
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
});

$("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
});

function toggleNav() {
    const nav = document.getElementById("myNav");

    if (nav.className === "nav_bar") {
        nav.className += " responsive";
    } else {
        nav.className = "nav_bar";
    }
}

function loadMap() {
    const mapElement = document.getElementById("map");

    if (!mapElement) {
        return;
    }

    const map = L.map('map').setView([40.4433, -79.9436], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    L.marker([40.4433, -79.9436]).addTo(map)
        .bindPopup("MonoMuse")
        .openPopup();
}

function showForm(date) {
    const form = document.getElementById("purchaseForm");

    if (form) {
        form.style.display = "block";

        // If you still have selectedDate field
        const selected = document.getElementById("selectedDate");
        if (selected) {
            selected.value = date;
        }

        form.scrollIntoView({ behavior: "smooth" });
    }
}

function updateTotalPrice() {
    const quantityInput = document.getElementById("quantity");
    const totalPrice = document.getElementById("totalPrice");

    if (!quantityInput || !totalPrice) return;

    const quantity = parseInt(quantityInput.value) || 0;
    const total = quantity * 18;
    totalPrice.textContent = total;
}

function clearErrors() {
    const errorIds = [
        "visitDateError",
        "visitTimeError",
        "ticketTypeError",
        "quantityError",
        "emailError",
        "zipCodeError"
    ];

    errorIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = "";
    });
}

function placeOrder() {
    clearErrors();

    const visitDate = document.getElementById("visitDate").value;
    const visitTime = document.getElementById("visitTime").value;
    const ticketType = document.getElementById("ticketType").value;
    const quantity = document.getElementById("quantity").value;
    const email = document.getElementById("email").value.trim();
    const zipCode = document.getElementById("zipCode").value.trim();
    const mailingList = document.getElementById("mailingList").checked;

    let isValid = true;

    if (!visitDate) {
        document.getElementById("visitDateError").textContent = "Please select a visit date.";
        isValid = false;
    }

    if (!visitTime) {
        document.getElementById("visitTimeError").textContent = "Please select a visit time.";
        isValid = false;
    }

    if (!ticketType) {
        document.getElementById("ticketTypeError").textContent = "Please select a ticket type.";
        isValid = false;
    }

    const quantityNum = parseInt(quantity);
    if (!quantity || isNaN(quantityNum) || quantityNum < 1 || quantityNum > 10) {
        document.getElementById("quantityError").textContent = "Please enter a quantity from 1 to 10.";
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById("emailError").textContent = "Please enter your email.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    const zipPattern = /^\d{5}$/;
    if (zipCode && !zipPattern.test(zipCode)) {
        document.getElementById("zipCodeError").textContent = "Zip code must be 5 digits.";
        isValid = false;
    }

    if (!isValid) return;

    const total = quantityNum * 18;

    const params = new URLSearchParams({
        date: visitDate,
        time: visitTime,
        type: ticketType,
        quantity: quantityNum,
        total: total,
        mailing: mailingList ? "Yes" : "No"
    });

    window.location.href = "confirmation.html?" + params.toString();
}

function loadConfirmation() {
    const message = document.getElementById("confirmationMessage");
    const details = document.getElementById("confirmationDetails");
    const total = document.getElementById("confirmationTotal");

    if (!message || !details || !total) return;

    const params = new URLSearchParams(window.location.search);

    const date = params.get("date");
    const time = params.get("time");
    const type = params.get("type");
    const quantity = params.get("quantity");
    const totalCost = params.get("total");
    const mailing = params.get("mailing");

    message.textContent = "Thank you! Your ticket order has been placed successfully.";
    details.textContent = `Visit Date: ${date} | Visit Time: ${time} | Ticket Type: ${type} | Quantity: ${quantity} | Mailing List: ${mailing}`;
    total.textContent = `Total Cost: $${totalCost}`;
}

let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");

    if (!slides.length) return;

    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach(slide => {
        slide.classList.remove("active-slide");
    });

    slides[currentSlideIndex].classList.add("active-slide");
}

function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}