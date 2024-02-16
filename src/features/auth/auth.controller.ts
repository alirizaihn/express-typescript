import { Request, Response, NextFunction } from "express";
import authService from './auth.services';



async function login(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await authService.login(req.body))
    } catch (err) {
        console.error(`Error while login`, err.message);
        next(err);
    }
}
async function create(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await authService.create(req.body))
    } catch (err) {
        console.error(`Error while login`, err.message);
        next(err);
    }
}
export default { login,create};