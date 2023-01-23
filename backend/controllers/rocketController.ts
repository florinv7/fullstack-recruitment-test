import asyncHandler from 'express-async-handler'
import Rocket from '../models/rocketModel'

// @desc Fetch all rockets
// @route GET /api/rockets
// @access Public
const getRockets = asyncHandler(async (req, res) => {
    const paginationSize = 2;

    console.log(req.query)
    const page = req.query.page ? +req.query.page - 1 : 0

    const rockets = await Rocket.find({}).skip(paginationSize * page).limit(paginationSize)
    const hasNext = await Rocket.count() > paginationSize * page + paginationSize;

    res.json({ rockets, hasNext })
})


// @desc Fetch single rocket
// @route GET /api/rockets/:id
// @access Public
const getRocketById = asyncHandler(async (req, res) => {
    const rocket = await Rocket.findById(req.params.id)

    if (rocket) {
        res.json(rocket)
    } else {
        res.status(404)
        throw new Error('Rocket not found')
    }
})

export {
    getRockets,
    getRocketById
}