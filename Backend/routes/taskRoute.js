import express from "express";
import {createTask, getTasks, getSingleTask, updateTask, deleteTask} from "../controller/taskController.js"

const router = express.Router();

router.post("/",createTask);
router.get("/",getTasks);
router.get("/:id",getSingleTask);
router.patch("/:id",updateTask);
router.delete("/:id",deleteTask);


export {router}


