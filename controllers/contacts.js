import * as mongodb from "../db/connect.js";
import { ObjectId } from "mongodb";

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

const create = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const newContact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        const result = await db.collection("contacts").insertOne(newContact);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const update = async (req, res) => {
    try {
    const db = mongodb.getDb();
    const contactId = new ObjectId(req.params.id);
    const updatedContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const result = await db.collection("contacts").replaceOne({ _id: contactId }, updatedContact);
    res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const remove = async (req, res) => {
    try {
        const db = mongodb.getDb();
        const contactId = new ObjectId(req.params.id);
        await db.collection("contacts").deleteOne({ _id: contactId });
        // 204 No Content should not send a JSON body
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default { getAll, getSingle, create, update, remove };