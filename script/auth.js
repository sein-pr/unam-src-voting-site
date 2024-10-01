document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = form.querySelector("input[type='text']");
    const passwordInput = form.querySelector("input[type='password']");
    const loginButton = form.querySelector("input[type='button']");
    const forgotPasswordLink = document.querySelector(".remember span");
    
    // Create a span for error messages
    const errorMessage = document.createElement("span");
    errorMessage.style.color = "red"; // Style for error message
    errorMessage.style.display = "none"; // Initially hidden
    form.appendChild(errorMessage); // Append span at the end of the form

    const validUsername = "221071784";
    const validPassword = "14781";

    // Add event listener for the login button
    loginButton.addEventListener("click", function () {
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        // Clear previous error message and styles
        errorMessage.textContent = "";
        usernameInput.style.borderColor = ""; // Reset border color
        passwordInput.style.borderColor = ""; // Reset border color

        // Validate username and password
        if (!enteredUsername || !enteredPassword) {
            // Display error message if inputs are empty
            errorMessage.textContent = "Please enter both username and password.";
            errorMessage.style.display = "block"; // Show error message
            usernameInput.style.borderColor = "red"; // Set border color to red
            passwordInput.style.borderColor = "red"; // Set border color to red
            return; // Prevent further execution
        }

        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            // Redirect to home.html if credentials are correct
            location.href = './home.html';
        } else {
            // Display an error message if credentials are incorrect
            errorMessage.textContent = "Invalid username or password. Please try again.";
            errorMessage.style.display = "block"; // Show error message
            usernameInput.style.borderColor = "red"; // Set border color to red
            passwordInput.style.borderColor = "red"; // Set border color to red
            usernameInput.value = ""; // Clear the username input
            passwordInput.value = ""; // Clear the password input
        }
    });

    // Add event listener for forgot password
    forgotPasswordLink.addEventListener("click", function () {
        // Create and display the modal
        const modal = document.createElement("div");
        modal.className = "modal"; // Add a class for styling
        modal.textContent = "Password sent to student email";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.backgroundColor = "#fff";
        modal.style.padding = "20px";
        modal.style.border = "1px solid #ccc";
        modal.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
        modal.style.zIndex = "1000"; // Ensure it appears above other elements
        document.body.appendChild(modal); // Append modal to the body

        // Close the modal after 3 seconds
        setTimeout(() => {
            document.body.removeChild(modal); // Remove modal from the DOM
        }, 3000);
    });
});
