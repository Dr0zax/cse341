import express from 'express';
import contacts from './contacts.js'
const router = express.Router();

// Mount the contacts router (contacts exports the router directly)
router.use("/contacts", contacts);

export default router;