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
async function validEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(String(email).toLowerCase());
    if (!result) {
        return true;
    }
    const results = await hackersDB.where("email", "==", email).get();
    let data = [];
    results.forEach(doc => {
        data.push(doc.data());
      });
    return !(data.length > 0);
}

// Returns error message is hacker object is invalid
async function validateHackerData(hackerObj) {
    if (hackerObj.firstName == null || !isAlphaNumeric(hackerObj.firstName) || hackerObj.firstName.length > 50) {
        return "Invalid First Name";
    }
    if (hackerObj.lastName == null || !isAlphaNumeric(hackerObj.lastName) || hackerObj.lastName.length > 50) {
        return "Invalid Last Name";
    }
    if (hackerObj.age == null || isNumeric(hackerObj.age) || hackerObj.age > 100 || hackerObj.age < 13) {
        return "Invalid Age";
    }
    var result = await validEmail(hackerObj.email);
    if (hackerObj.email == null || !result) {
        return "Invalid Email";
    }
    if (hackerObj.school == null || !isAlphaNumeric(hackerObj.school) || hackerObj.school.length > 100) {
        return "Invalid School";
    }
    if (hackerObj.gender == null || !isAlphaNumeric(hackerObj.gender) || hackerObj.gender.length > 50) {
        return "Invalid Gender";
    }
    if (hackerObj.major == null || !isAlphaNumeric(hackerObj.major) || hackerObj.major.length > 50) {
        return "Invalid Major";
    }
    if (hackerObj.whyCruzHacks == null || !isAlphaNumeric(hackerObj.whyCruzHacks) || hackerObj.whyCruzHacks.length > 500) {
        return "Invalid CruzHacks Response";
    }
    if (!isAlphaNumeric(hackerObj.anythingElse) || (hackerObj.anythingElse != null && hackerObj.anythingElse.length > 500)) {
        return "Invalid Extra Responses";
    }
    return null;
}

module.exports = {validateHackerData}