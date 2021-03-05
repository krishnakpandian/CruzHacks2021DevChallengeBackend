// validation.js
const firebase = require('./firebaseConfig');
const hackersDB = firebase.db.collection('hackers');

// Checks if message is alphanumeric
function isAlphaNumeric(data) {
    const alphaNumeric = '^[a-zA-Z0-9 .\'?!,-]*$';
    return data.match(alphaNumeric);
}

// Checks for Number
function isNumeric(data) {
    return isNaN(data);
}

// Checks that email inputted is not a duplicate and is a real email
// true if valid, false if not valid
async function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(String(email).toLowerCase());
    if (!result) {
        return false;
    }
    const results = await hackersDB.where("email", "==", email).get();
    return !(results.size > 0);
}

// Returns error message is hacker object is invalid
async function validateHackerData(hackerObj) {
    if (hackerObj.firstName == null || !isAlphaNumeric(hackerObj.firstName) || hackerObj.firstName.length > 25) {
        return "Invalid First Name Inputted";
    }
    if (hackerObj.lastName === '' || !isAlphaNumeric(hackerObj.lastName) || hackerObj.lastName.length > 25) {
        return "Invalid Last Name Inputted";
    }
    if (hackerObj.age === '' || isNumeric(hackerObj.age) || hackerObj.age > 100 || hackerObj.age < 13) {
        return "Invalid Age Inputted";
    }
    var result = await validEmail(hackerObj.email);
    if (hackerObj.email === '' || !result || hackerObj.email.length > 50) {
        return "Bad Email or Account already exists";
    }
    if (hackerObj.school === '' || !isAlphaNumeric(hackerObj.school) || hackerObj.school.length > 50) {
        return "Invalid School Inputted";
    }
    if (hackerObj.gender === '' || !isAlphaNumeric(hackerObj.gender) || hackerObj.gender.length > 25) {
        return "Invalid Gender Inputted";
    }
    if (hackerObj.major === '' || !isAlphaNumeric(hackerObj.major) || hackerObj.major.length > 50) {
        return "Invalid Major Inputted";
    }
    if (hackerObj.whyCruzHacks === '' || !isAlphaNumeric(hackerObj.whyCruzHacks) || hackerObj.whyCruzHacks.length > 500) {
        return "Invalid Why CruzHacks Response";
    }
    if (!isAlphaNumeric(hackerObj.anythingElse) || (hackerObj.anythingElse !== '' && hackerObj.anythingElse.length > 500)) {
        return "Invalid Any Else CruzHacks Response";
    }
    return null;
}

module.exports = {validateHackerData}