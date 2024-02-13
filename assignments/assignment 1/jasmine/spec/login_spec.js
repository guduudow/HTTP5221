describe("MD5 Encryption Test with Jasmine", function () {
    describe("Test to Pass", function () {
        it("The function should encrypt a string with MD5 and return a string.", function () {
            let passTest = md5Encrypt('Password');
            expect(passTest).toMatch(/^[0-9a-f]{32}$/);
        });
    })
})

describe("checkLogin Test with Jasmine", function () {
    describe("Test to Pass", function () {
        it("Should return true if the username and password match known username and password", function () {
            let correctLogin = checkLogin('ederes', md5Encrypt("gure"));
            expect(correctLogin).toBe(true);
        });
    })
    describe("Test to Fail", function () {
        it("Should return false if the username is empty", function () {
            let login = checkLogin('', md5Encrypt('gure'));
            expect(login).toBe('no username entered');
        })
        it("Should return false if the password is empty", function () {
            let login = checkLogin('ederes', '');
            expect(login).toBe('no password entered');
        })
        it('Should return invalid username or password if username input or password input does not match known values', function () {
            let login = checkLogin('bobby', md5Encrypt('parelli'));
            expect(login).toBe('invalid username or password');
        })
    })
})