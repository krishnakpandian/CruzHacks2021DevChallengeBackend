// controller.js
const createHackerObj = require('../helper/schema').createHackerObj;
const validateHackerData = require('../helper/validation').validateHackerData;

// Get required database
const firebase = require('../helper/firebaseConfig');
const db = firebase.db;
const hackersDB = db.collection('hackers');

// Create controllers for each endpoint

// Creates a new hacker in database
// Supports http POST
const createHacker = async (req,res) => {
    try {
        const hacker = createHackerObj(req.body);
        const response = await validateHackerData(hacker);
        if (response != null) {
            return res.status(400).send(JSON.stringify({"statusCode": 400, "message": response}));
        }
        let id;
        await hackersDB.add(hacker).then((docId) => {id = docId.id});
        return res.status(201).send(JSON.stringify({ "statusCode": 201, "message": "Successfully Created User", "id": id}));
    }
    catch (error) {
        //console.error(error);
        return res.status(501).send(JSON.stringify({ "statusCode": 501, "message": error }));
    }
}

// Get's a specific hacker given an id
// Supports http GET
const getHacker = async (req,res) => {
    try {
        const doc = await hackersDB.doc(req.params.id).get();
        if (!doc.exists) {
            return res.status(400).send(JSON.stringify({"statusCode": 400, "message": "No Hacker Found"}));
        } 
        return res.status(200).send(JSON.stringify({ results: doc.data(), "statusCode": 200, "message": "Hacker Information Retrieved" }));
    }
    catch (error) {
        //console.error(error);
        return res.status(500).send(JSON.stringify({ "statusCode": 500, "message": error }));
    }
}

// Get's all hacker info
// Supports http GET
const getAllHackers = async (req,res) => {
    try {
        const snapshot = await hackersDB.get();
        let hackers = [];
        snapshot.forEach((doc) => {
            hackers.push({
                id: doc.id,
                data: doc.data()
            }
            )
        })
        if (hackers == []){
            return res.status(400).send(JSON.stringify({"statusCode": 400, "message": response}));
        }
        return res.status(200).send(JSON.stringify({ "results": hackers, "statusCode": 200, "message": "Retrieved all hackers" }));
    }
    catch (error) {
        //console.error(error);
        return res.status(500).send(JSON.stringify({ "statusCode": 500, "message": error }));
    }
}

// Delete's a specific hacker from db given an id
// Supports http DELETE
const deleteHacker = async (req,res) => {
    try {
        await hacker.doc(req.params.id).delete();
        return res.status(200).send({ "statusCode": 200, "message": "Succesful Deletion" });
    }
    catch (error) {
        //console.error(error);
        return res.status(500).send(JSON.stringify({ "statusCode": 500, "message": error }));
    }
}

module.exports = {createHacker, getHacker, getAllHackers, deleteHacker}