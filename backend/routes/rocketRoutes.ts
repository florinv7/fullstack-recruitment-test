import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler'

import { getRocketById, getRockets, createRocket, deleteRocket, updateRocket} from '../controllers/rocketController'

const router = express.Router()

router.route('/')
    .get(getRockets)
    .post(createRocket)

router.route('/:id')
    .get(getRocketById)
    .delete(deleteRocket)
    .put(updateRocket)

export default router