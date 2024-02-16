import express from 'express';
import listsController from './lists.controller';
const router = express.Router();

router.get('/',listsController.getAll);
router.get('/:id',listsController.get);
router.post('/',listsController.create);
router.put('/:id', listsController.update);
router.delete('/:id',listsController.remove);

export default router;