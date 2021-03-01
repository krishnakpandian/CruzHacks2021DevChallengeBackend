// schema.js

// Creates a hacker object given a request body
function createHackerObj(hackerData) {
    return {
        firstName: hackerData.firstName,
        lastName: hackerData.lastName,
        email: hackerData.email,
        age: hackerData.age,
        school: hackerData.school,
        gender: hackerData.gender,
        major: hackerData.major,
        whyCruzHacks: hackerData.whyCruzHacks,
        anythingElse: hackerData.anythingElse
    }
}

module.exports = {createHackerObj}