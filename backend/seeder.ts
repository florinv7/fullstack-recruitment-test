import mongoose from "mongoose";
import dotenv from "dotenv";
import rockets from "./data/rockets";
import Rocket from "./models/rocketModel";
import connectDB from "./config/db";

dotenv.config()

connectDB()

const destroyData = async () => {
    try {
        await Rocket.deleteMany() //clean DB at first launch

        console.log("Data Destroyed!")
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const importData = async () => {
    try {
        await Rocket.deleteMany() //clean DB at first launch

        await Rocket.insertMany(rockets)

        console.log("Data Imported!")
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}