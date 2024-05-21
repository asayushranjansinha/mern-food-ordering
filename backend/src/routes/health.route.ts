import express, { Request, Response } from 'express'
const routes = express.Router();

routes.get("/health", (req: Request, res: Response) => {
    return res.send({ message: "HEALTH OK!" });
});

export default routes;