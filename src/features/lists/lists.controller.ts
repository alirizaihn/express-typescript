import { Request, Response, NextFunction } from "express";
import listService from './lists.service';


async function getAll(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await listService.getAll())
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}

async function get(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await listService.get(req.params.id))
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}
async function update(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await listService.update(req.params.id, req.body))
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}
async function create(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await listService.create(req.body))
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}
async function remove(req: Request, res: Response, next: NextFunction) {

    try {
        res.json(await listService.remove(req.params.id))
    } catch (err) {
        console.error(`Error while getting the lists`, err.message);
        next(err);
    }
}
export default { getAll, get, create, update, remove };