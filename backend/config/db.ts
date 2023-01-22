import mongoose from 'mongoose'

const connectDB = async () => {
    const connectOptions : mongoose.ConnectOptions =  {
        autoIndex: true
    }
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`, connectOptions)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error : any) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB