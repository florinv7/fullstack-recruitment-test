import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler'

import Rocket from '../models/rocketModel';

const router = express.Router()

// @desc Fetch all rockets
// @route GET /api/rockets
// @access Public
router.get(
    "/",
    asyncHandler(async (req: Request, res: Response) => {
        const rockets = await Rocket.find({})

        res.json(rockets)
    }))

// @desc Fetch single rocket
// @route GET /api/rockets/:id
// @access Public
router.get(
    "/:id",
    asyncHandler(async (req: Request, res: Response) => {
        const rocket = await Rocket.findById(req.params.id)

        if(rocket){
            res.json(rocket)
        }else{
            res.status(404)
            throw new Error('Rocket not found')
        }
    }))

export default router