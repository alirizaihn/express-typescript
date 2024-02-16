
import { Request,Response, NextFunction } from "express";
import tasksService from "./tasks.service";


async function get(req: Request, res:Response, next:NextFunction) {
    try {
        res.json(await tasksService.get(req.params.id))
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}

async function getAll(req: Request, res:Response, next:NextFunction) {
    try {
        res.json(await tasksService.getAll())
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}
async function create(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await tasksService.create(req.body))
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}
async function update(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await tasksService.update(req.params.id, req.body))
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}
async function remove(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await tasksService.remove(req.params.id))
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}
export default { getAll, get, create, update, remove };