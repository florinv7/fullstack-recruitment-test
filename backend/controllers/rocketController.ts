import asyncHandler from 'express-async-handler'
import Rocket from '../models/rocketModel'
import { Request, Response } from 'express';

// @desc Fetch all rockets
// @route GET /api/rockets
// @access Public
const getRockets = asyncHandler(async (req : Request, res : Response) => {
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
const getRocketById = asyncHandler(async (req : Request, res : Response) => {
    const rocket = await Rocket.findById(req.params.id)

    if (rocket) {
        res.json(rocket)
    } else {
        res.status(404)
        throw new Error('Rocket not found')
    }
})

// @desc    Delete a rocket
// @route   DELETE /api/rockets/:id
// @access  Private/Admin
const deleteRocket = asyncHandler(async (req : Request, res : Response) => {
    const rocket = await Rocket.findById(req.params.id)
  
    if (rocket) {
      await rocket.remove()
      res.json({ message: 'Rocket removed' })
    } else {
      res.status(404)
      throw new Error('Rocket not found')
    }
  })
  
  // @desc    Create a rocket
  // @route   POST /api/rockets
  // @access  Private/Admin
  const createRocket = asyncHandler(async (req : Request, res : Response) => {
    const rocket = new Rocket({
      name: 'Sample name',
      photo: '/images/sample.jpg',
      description: 'A rocket is a vehicle, missile or aircraft that uses thrust to propel itself through the air or into space. Rockets are powered by a combination of chemicals, such as liquid oxygen and kerosene, or solid fuel, and are designed to travel at high speeds and altitudes.',
      diameter: 0,
      height: 0,
      mass: 0
    })
  
    const createdRocket = await rocket.save()
    res.status(201).json(createdRocket)
  })
  
  // @desc    Update a rocket
  // @route   PUT /api/rockets/:id
  // @access  Private/Admin
  const updateRocket = asyncHandler(async (req : Request, res : Response) => {
    const {
      name,
      description,
      photo,
      diameter,
      height,
      mass
    } = req.body
  
    const rocket = await Rocket.findById(req.params.id)
  
    if (rocket) {
      rocket.name = name
      rocket.description = description
      rocket.photo = photo
      rocket.diameter = diameter
      rocket.height = height
      rocket.mass = mass
  
      const updatedRocket = await rocket.save()
      res.json(updatedRocket)
    } else {
      res.status(404)
      throw new Error('Rocket not found')
    }
  })

export {
    getRockets,
    getRocketById,
    deleteRocket,
    updateRocket,
    createRocket
}