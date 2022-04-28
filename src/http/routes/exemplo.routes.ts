import { Router } from "express";

import ExemploController from "../../modulos/modulo_1/controller/ExemploController";

const exemplo = Router();

const exemploController = new ExemploController();

exemplo.get("/cadastro", exemploController.exemplo);

export default exemplo;
