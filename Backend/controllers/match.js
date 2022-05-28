const conn = require('../config');
const Match = require('../models/match');

const getAll = async (req, res) => {
    let matchData = await conn.firestore().collection('match').get();
    let arr = [];
    matchData.forEach(element => {
        let match = new Match(element.id, element.data().matchname, element.data().matchid, element.data().description);
        arr.push(match);
    });

    res.json(arr);
}


const getById = async (req, res) => {
    const matchData = await conn.firestore().collection('match').doc(req.params.id).get();
    res.json(matchData.data());
}

const create = async (req, res) => {
    await conn.firestore().collection('match').doc().set(req.body);
    res.json({ message: "Match created" });
}

const getByIdandUpdate = async (req, res) => {
    const matchData = await conn.firestore().collection('match').doc(req.params.id).update(req.body);
    res.json({ message: "Match updated" });
}

const getByIdandDelete = async (req, res) => {
    const matchData = await conn.firestore().collection('match').doc(req.params.id).delete();
    res.json({ message: "Match deleted" });
}

module.exports = {
    getAll,
    getById,
    create,
    getByIdandUpdate,
    getByIdandDelete
}



