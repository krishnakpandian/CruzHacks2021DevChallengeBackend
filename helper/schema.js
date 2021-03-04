// schema.js

// Creates a hacker object given a request body
function createHackerObj(hackerData) {
    return {
        firstName: hackerData.firstName ? hackerData.firstName : '',
        lastName: hackerData.lastName ? hackerData.lastName : '',
        email: hackerData.email ? hackerData.email : '',
        age: hackerData.age ? hackerData.age : 0,
        school: hackerData.school ? hackerData.school : '',
        gender: hackerData.gender ? hackerData.gender : '',
        major: hackerData.major ? hackerData.major : '',
        whyCruzHacks: hackerData.whyCruzHacks ? hackerData.whyCruzHacks : '',
        anythingElse: hackerData.anythingElse ? hackerData.anythingElse : ''
    }
}

module.exports = {createHackerObj}