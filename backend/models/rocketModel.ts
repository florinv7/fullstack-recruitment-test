import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IRocket {
    name: string;
    description: string;
    height: number;
    diameter: number;
    mass: number;
    photo?: string;
}

// 2. Create a Schema corresponding to the document interface.
const rocketSchema = new Schema<IRocket>({
    name: {
        type: String,
        require: true,
        unique: false
    },
    description: {
        type: String,
        require: true
    },
    height: {
        type: Number,
        require: true,
        default: 0
    },
    diameter: {
        type: Number,
        require: true,
        default: 0
    },
    mass: {
        type: Number,
        require: true,
        default: 0
    },
    photo: {
        type: String,
        require: false
    }
}, {timestamps : true})

// 3. Create a Model.
const Rocket = model<IRocket>('Rocket', rocketSchema);

export default Rocket