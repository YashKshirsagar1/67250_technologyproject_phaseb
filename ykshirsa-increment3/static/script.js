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
