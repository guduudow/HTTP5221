window.onload = function () {
    let loginHandle = document.querySelector('.login__button');
    console.log(loginHandle);
    loginHandle.addEventListener('click', function (e) {
        e.preventDefault();
        //create variables to connect to HTML
        let userInput = document.querySelector('.login__user');
        let passInput = document.querySelector('.login__pass');
        let validLogin = document.querySelector('.login__text');
        let output = document.querySelector('.output');
        //then call checkLogin function
        let checker = checkLogin(userInput.value, passInput.value);
        console.log(checker);
        console.log(validLogin);
        //then if correct - innerHTML statement says correct! and if wrong statement says wrong!
        if (checker === true) {
            output.style.display = 'block';
            validLogin.innerHTML = `<h1>Welcome Back!</h1>`;
        } else {
            output.style.display = 'block';
            validLogin.innerHTML = `<h1>${checker}</h1>`;
        }
    });
}

