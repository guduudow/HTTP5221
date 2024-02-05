describe("Number Guess Test with Jasmine", function () {
    describe("Test to Pass", function () {
        it("The function should return 'You guessed it!' when the correct number is entered. [4]", function () {
            let secretGuess = 4;
            expect(guessNum(secretGuess)).toEqual("You guessed it!");
        });
        it("The function should return 'guess again' for any number between 1 and 10 (inclusive) that is not the correct answer. [2]", function () {
            let secretGuess = 2;
            expect(guessNum(secretGuess)).toEqual("Guess again.");
        });
    })
    describe("Test to Fail", function () {
        it("The function should return 'A number was not input' if the value entered is not a number [a]", function () {
            let secretGuess = "a";
            expect(guessNum(secretGuess)).toEqual("A number was not input.");
        });
        it("The function should 'A value was not entered' if it receives an empty string ['']", function () {
            let secretGuess = "";
            expect(guessNum(secretGuess)).toEqual("A value was not entered.");
        });
        it("The function should return 'Way off!!! Pick between 1 and 10 if the value entered is a number outside of the allowed range of guessing values [41]", function () {
            let secretGuess = 41;
            expect(guessNum(secretGuess)).toEqual("Way off!!! Pick between 1 and 10.");
        });
    })
    describe("Boundary Tests", function () {
        it("Should return way off!! pick a number between 1 and 10 [0]", function () {
            let secretGuess = 0;
            expect(guessNum(secretGuess)).toEqual("Way off!!! Pick between 1 and 10.");
        });
        it("Should return guess again [1]", function () {
            let secretGuess = 1;
            expect(guessNum(secretGuess)).toEqual("Guess again.");
        });
        it("Should return guess again [2]", function () {
            let secretGuess = 2;
            expect(guessNum(secretGuess)).toEqual("Guess again.");
        });
        it("Should return guess again [9]", function () {
            let secretGuess = 9;
            expect(guessNum(secretGuess)).toEqual("Guess again.");
        });
        it("Should return guess again [10]", function () {
            let secretGuess = 10;
            expect(guessNum(secretGuess)).toEqual("Guess again.");
        });
        it("Should return way off!! pick a number between 1 and 10 [11]", function () {
            let secretGuess = 11;
            expect(guessNum(secretGuess)).toEqual("Way off!!! Pick between 1 and 10.");
        });
    })
});