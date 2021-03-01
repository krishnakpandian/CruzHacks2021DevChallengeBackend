const createHackerObj = require('../helper/schema').createHackerObj;
const validateHackerData = require('../helper/validation').validateHackerData;

const firebase = require('../firebaseConfig');
const db = firebase.db;
const hackersDB = db.collection('hackers');


const createHacker = async (req,res) => {
    try {
        const hacker = createHackerObj(req.body);
        const response = validateHackerData(hacker);
        if (response != null) {
            return res.status(400).send(JSON.stringify({"statusCode": 400, "message": response}));
        }
        let id;
        await hackersDB.add(hacker).then((docId) => {id = docId.id});
        res.status(201).send(JSON.stringify({ "statusCode": 201, "message": "Successfully Created User", "id": id}))
    }
    catch (error) {
        console.error(error);
        res.status(501).send(JSON.stringify({ "statusCode": 501, "message": "Server Error" }));
    }
}

const getHacker = async (req,res) => {
    try {
        const doc = await hackersDB.doc(req.params.id).get();
        if (!doc.exists) {
            return res.status(400).send(JSON.stringify({code: 400, message: "No Hacker Found"}))
        } 
        res.status(200).send(JSON.stringify({ results: doc.data(), code: 200, message: "Hacker Information Retrieved" }));
    }
    catch (error) {
        console.error(error);
        res.status(500).send(JSON.stringify({ "statusCode": 500, "message": "Server Error" }));
    }
}

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
        res.status(200).send(JSON.stringify({ results: hackers, code: 200, message: "Succesful GET" }));
    }
    catch (error) {
        console.error(error);
        res.status(500).send(JSON.stringify({ "statusCode": 500, "message": "Server Error" }));
    }
}

const updateHacker = async (req,res) => {
    try {

    }
    catch (error) {
        console.error(error);
        res.status(500).send(JSON.stringify({ "statusCode": 500, "message": "Server Error" }));
    }
}

const deleteHacker = async (req,res) => {
    try {
        await hackersDB.doc(req.params.id).delete();
        res.status(200).send({ "code": 200, "message": "Succesful Deletion" });
    }
    catch (error) {
        console.error(error);
        res.status(500).send(JSON.stringify({ "statusCode": 500, "message": "Server Error" }));
    }
}

module.exports = {createHacker, getHacker, getAllHackers, updateHacker, deleteHacker}