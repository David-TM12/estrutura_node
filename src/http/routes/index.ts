import { Router } from "express";

import exemplo from "./exemplo.routes";

const exemploRoutes = Router();

exemploRoutes.use("/exemplo", exemplo);

export default exemploRoutes;
