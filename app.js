const passwordInput = document.getElementById('password');
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@$%^&*+#{}+-[]><_~";

const allChrs = upperCase + lowerCase + numbers + symbols;

function createRandomPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChrs[Math.floor(Math.random() * allChrs.length)];
    }
    passwordInput.value = password;
}

function copyToClipBoard() {
    passwordInput.select();
    document.execCommand("copy");

    // Show toast notification
    const toast = document.getElementById('toast');
    toast.style.display = 'block';
    setTimeout(function() {
        toast.style.display = 'none';
    }, 2000); // Hide toast after 2 seconds
}
