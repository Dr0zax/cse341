const mongodb = require("../db/connect");
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    try {
        const db = mongodb.getDb();
        
        const result = await db.collection("contacts").find();
        const lists = await result.toArray();
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(lists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSingle = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const contactId = new ObjectId(req.params.id);
        const contact = await db.collection("contacts").findOne({ _id: contactId });
        if (!contact) {
            res.status(404).json({ message: "Contact not found" });
            return;
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(contact);
        return;
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAll, getSingle };