import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler'

import { getRocketById, getRockets} from '../controllers/rocketController'

const router = express.Router()

router.route('/').get(getRockets)

router.route('/:id').get(getRocketById)

export default router