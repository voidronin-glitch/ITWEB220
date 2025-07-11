function isStrongPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Check if the password contains the string "password" (case-insensitive)
    if (password.toLowerCase().includes("password")) {
        return false;
    }

    // Check if the password contains at least one uppercase character
    let hasUppercase = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUppercase = true;
            break;
        }
    }
    if (!hasUppercase) {
        return false;
    }

    // If all conditions pass, return true
    return true;
}

// This function connects the button to the checker
function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");

    if (isStrongPassword(password)) {
        result.textContent = "✅ Strong Password!";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Not a strong password.";
        result.style.color = "red";
    }
}
