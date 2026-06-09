// Selecting elements by their ID
var heading = document.getElementById("main-heading");
var inputField = document.getElementById("username");
var btn = document.getElementById("submit-btn");

var b1 = document.getElementById("box1");
var b2 = document.getElementById("box2");
var b3 = document.getElementById("box3");
var b4 = document.getElementById("box4");

// Function for greet button click
btn.onclick = function() {
    var name = inputField.value;
    if(name == "") {
        heading.innerHTML = "Hello";
    } else {
        heading.innerHTML = "Hello, " + name;
    }
};


b1.onclick = function() {
    b1.style.backgroundColor = "red";
    b1.style.color = "white";
};

b2.onclick = function() {
    b2.style.backgroundColor = "blue";
    b2.style.color = "white";
};

b3.onclick = function() {
    b3.style.backgroundColor = "green";
    b3.style.color = "white";
};

b4.onclick = function() {
    b4.style.backgroundColor = "yellow";
    b4.style.color = "black"; /* Black text looks better on yellow background */
};