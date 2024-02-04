const usernameInput = document.getElementById("usernameInput");

function addNeonBorder() {
    usernameInput.classList.add("neon-border");
}

function removeNeonBorder() {
    usernameInput.classList.remove("neon-border");
}

usernameInput.addEventListener("focus", addNeonBorder);
usernameInput.addEventListener("blur", removeNeonBorder);