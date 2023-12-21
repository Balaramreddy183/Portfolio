// var enteredPin = document.getElementById("pinNumber");
// var correctPin = "0000";

// function checkPin() {
//     event.preventDefault();
//     if (enteredPin.value === correctPin) {
//         document.getElementById("loginForm").style.display = "none";
//         document.getElementById("content").style.display = "block";
//         console.log(enteredPin);
//         console.log(correctPin);
//     }
//     else {
//         alert("Wrong PIN! Try again.");
//     }

// }
// Check if the user is already logged in
if (localStorage.getItem("loggedIn") === "true") {
    // User is already logged in, show content
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("content").style.display = "block";
    
}

function checkPin(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Check if the user is already logged in
    if (localStorage.getItem("loggedIn") === "true") {  
        // User is already logged in, show content
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("content").style.display = "block";
        console.log("User already logged in");
    } else {
        var enteredPin = document.getElementById("pinNumber");
        var correctPin = "3690";

        // Check the entered PIN
        if (enteredPin.value === correctPin) {
            // Set a flag in localStorage indicating that the user is logged in
            localStorage.setItem("loggedIn", "true");

            // Update the display
            document.getElementById("loginForm").style.display = "none";
            document.getElementById("content").style.display = "block";
            console.log("User logged in");

            // Set a timeout to clear the loggedIn flag after 12 hours
            setTimeout(function () {
                localStorage.removeItem("loggedIn");
                console.log("User logged out after 12 hours");
            }, 12 * 60 * 60 * 1000);
        } else {
            alert("Wrong PIN! Try again.");
        }
    }
}
