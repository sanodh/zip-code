const conn = require('../config');
const Profile = require('../models/profile');


const getAll = async (req, res) => {
    let profileData = await conn.firestore().collection('profile').get();
    let arr = [];
    profileData.forEach(element => {
        let profile = new Profile(
            element.id, 
            element.data().name, 
            element.data().mobileNum, 
            element.data().address,
            element.data().email,
            element.data().organization,
            element.data().country,
            element.data().state,
            element.data().age,
            element.data().description
            );
        arr.push(profile);
    });

    res.json(arr);
}

const getById = async (req, res) => {
    const profileData = await conn.firestore().collection('profile').doc(req.params.id).get();
    res.json(profileData.data());
}

const create = async (req, res) => {
    await conn.firestore().collection('profile').doc(req.body.name).set(req.body);
    res.json({ message: "profile created" });
}

const getByIdandUpdate = async (req, res) => {
    const profileData = await conn.firestore().collection('profile').doc(req.params.id).update(req.body);
    res.json({ message: "profile updated" });
}

const getByIdandDelete = async (req, res) => {
    const profileData = await conn.firestore().collection('profile').doc(req.params.id).delete();
    res.json({ message: "profile deleted" });
}

module.exports = {
    getAll,
    getById,
    create,
    getByIdandUpdate,
    getByIdandDelete
}



