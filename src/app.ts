import express, {Express,Request,Response} from 'express';
import { lists } from './features/lists';
import connectDB from './config/db';
import bodyParser from 'body-parser';
import { tasks } from './features/tasks';
import {auth} from './features/auth';
import cors from 'cors';
import protect from './middleware/auth.middleware';
connectDB();
const app: Express = express()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/lists",protect,lists)
app.use('/tasks', tasks)
app.use('/auth', auth)
app.get("/", (_: Request, res: Response) => {
    res.send("Express + TypeScript Server!");
  });

export default app;