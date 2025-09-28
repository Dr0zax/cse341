import { Router } from "express";
import { baseController } from "../controllers/index.js";

const routes = Router();

routes.get("/", baseController.getName);

export default routes;