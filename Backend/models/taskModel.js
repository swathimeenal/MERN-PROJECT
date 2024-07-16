import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
     title: {type: String, require: true},
     description: { type: String},
},{
    timestamps: true
})

const taskModels = mongoose.model('Task',taskSchema)
export {taskModels}