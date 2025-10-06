import express from 'express';
import contacts from '../controllers/contacts.js';
const router = express.Router();

router.get("/", contacts.getAll);
router.get("/:id", contacts.getSingle);
router.post("/", contacts.create);
router.put("/:id", contacts.update);
router.delete("/:id", contacts.remove);

export default router;