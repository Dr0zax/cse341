import express from 'express';
import contacts from './contacts.js'
const router = express.Router();

import { readFileSync } from 'fs';
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = JSON.parse(readFileSync('./swagger.json'));

// Mount the contacts router (contacts exports the router directly)
router.use("/contacts", contacts);
router.use('/api-docs', swaggerUi.serve)
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

export default router;