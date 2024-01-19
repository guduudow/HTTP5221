window.onload = domReady;

function domReady() {
    let formHandle = document.querySelector(".login");
    formHandle.onsubmit = function () {
        let userInput = document.querySelector(".login__user");
        if (userInput.value === "") {
            userInput.classList.add("login__txtbox_error");
            userInput.focus();
            return false;
        }
        let passInput = document.querySelector(".login__pass");
        if (passInput.value === "") {
            passInput.classList.add("login__txtbox_error");
            passInput.focus();
            return false;
        }
        let showAll = document.querySelector(".output");
        showAll.style.display = "block";
        let showuser = document.querySelector(".output__user");
        showuser.innerHTML = userInput.value;
        let showpass = document.querySelector(".output__pass");
        showpass.innerHTML = passInput.value;
        return false;
    };
}
