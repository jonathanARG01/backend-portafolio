import { Schema, model } from 'mongoose';



const createUserModel = new Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);



export default model('users', createUserModel);
