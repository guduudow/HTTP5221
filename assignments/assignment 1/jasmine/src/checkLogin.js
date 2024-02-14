/**
 * The checkLogin function will validate user input,
 * checking if the username and password match.
 * The username & password will be encrypted with MD5
 * so checkLogin will require the md5Encrypt function.
 * @param {string} username 
 * @param {string} password 
 * @returns {boolean} true 
 */

function checkLogin(username, password) {
    //hard code user name and password
    let correctUser = 'ederes';
    let correctPass = md5Encrypt("gure");

    if (username === "") {
        return "no username entered";
    } else if (password === "") {
        return "no password entered";
    } else if (username !== correctUser || md5Encrypt(password) !== correctPass.toString()) {
        return "invalid username or password";
    } else {
        return true;
    }

    //return true;
}
