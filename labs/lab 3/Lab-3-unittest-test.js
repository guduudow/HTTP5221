//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST & TEST EXECUTION ==========
function test__checkHumbrId(valueIn, expected) {
    "use strict";
    //create a variable to hold the result of calling the function with the provided value
    let result = checkHumbrId(valueIn, expected);
    let pass = "==PASSED==";
    let fail = "xxFAILEDxx";
    //print out: the value we are testing|result of the function|our expectation
    if (checkHumbrId(valueIn) === expected) {
        let msg = `<strong>Value tested:</strong> ${valueIn} <strong>Expected result:</strong> ${expected} <p style="color: green; font-weight:700;">${pass}</p><br/>`;
        let msgBox = document.getElementById("data");
        msgBox.innerHTML += msg;
    } else {
        let msg = `<strong>Value tested:</strong> ${valueIn} <strong>Expected result:</strong> ${expected} <p style="color: red; font-weight:700;">${fail}</p><br/>`;
        let msgBox = document.getElementById("data");
        msgBox.innerHTML += msg;
    }
    //so we can see the result, grab the output element from the HTML

}

// running the tests \\
//test to pass
test__checkHumbrId("n01630082", true); //my humberID
test__checkHumbrId("N12345678", true); //generic humber id
//test to fail
test__checkHumbrId("M12345678", false);
test__checkHumbrId(null, false);
//boundary test 
test__checkHumbrId("n1234567", false); //less than 8 numbers
test__checkHumbrId("n123456789", false); //more than 8 numbers


