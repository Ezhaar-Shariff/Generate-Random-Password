const input = document.querySelector("input");
const para = document.querySelector("p");
const icon = document.querySelector(".dark-mode-toggle");

function generatePassword() {
    const len = parseInt(input.value);
    if (!len || len < 4) {
        para.textContent = "Enter valid length (min 4)";
        para.style.opacity = 1;
        para.style.color="red";
        para.style.fontWeight="bold";
        return;
    }

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < len; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    para.style.opacity = 0;
    setTimeout(() => {
        para.textContent = password;
        para.style.opacity = 1;
        para.style.color="green";
        para.style.fontWeight="bold";
    }, 100);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}