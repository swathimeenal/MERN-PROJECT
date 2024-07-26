import mongoose from "mongoose";
import { taskModels } from "../models/taskModel.js";


// To create a Task -POST
const createTask = async(req, res)=>{
    const{title,description}= req.body;
   try
   {
    const Task = await taskModels.create({title,description});
    res.status(200).json(Task);
   }
   catch(err)
   {
    res.status(400).json({error:err.message});
   }
}

// To get all Task - GET
const getTasks =async(req, res)=>{
    try{
        const tasks = await taskModels.find({})
        res.status(200).json(tasks);
    }
    catch(err)
   {
    res.status(400).json({error:err.message});
   }

}

// To get a Single task - GET
 const getSingleTask = async(req,res)=>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Task Not Found'})
    }
    try{
        const singleTask = await taskModels.findById(id)
        res.status(200).json(singleTask)
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
 }

 // To Update a task - PATCH
 const updateTask = async(req,res)=>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Errormessage:'Task Not Found'})
    }
    try{
        const task = await taskModels.findByIdAndUpdate({
            _id:id
        },{...req.body})
        res.status(200).json(task)
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
 }

 // Delete Task - DELETE

 const deleteTask = async(req,res)=>{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({Errormessage:'Task Not Found'})
    }
    try{
        const task = await taskModels.findByIdAndDelete(id);
        res.status(200).json(task)
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
 }


export {createTask, getTasks, getSingleTask, updateTask, deleteTask}