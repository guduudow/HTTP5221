window.onload = function () {
    let loginHandle = document.querySelector('.login__button');
    console.log(loginHandle);
    loginHandle.addEventListener('click', function () {
        //create variable to connect to HTML
        let userInput = document.querySelector('.login__user');
        let passInput = document.querySelector('.login__pass');
        let validLogin = document.querySelector('.output');
        //then call checkLogin function
        checkLogin(userInput, passInput);
        //then if correct - innerHTML statement says correct!
        if (userInput.value == 'ederes' && passInput.value == 'gure') {
            validLogin.innerHTML = `Welcome Back!`;
        } else {
            validLogin.innerHTML = `Incorrect!`;
        }
        //if not - innerHTML statement says wrong!
    });
}