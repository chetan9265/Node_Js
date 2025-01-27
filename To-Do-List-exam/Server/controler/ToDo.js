const ToDoModel = require("../model/ToDo.Model");

const GetToDo = async (req, res) => {
    try {
        const data = await ToDoModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.json({ message: error?.message });
    }
}


const AddToDo=async (req,res)=>{
    const {Task,completed}=req.body;
if(!Task){
    return res.json({message:"Task is required"});}
    
    try {
        const ToDo=await ToDoModel.create({Task,completed});
        res.status(200).json({message:"Task added successfully"});
        
    } catch (error) {
        res.status(400).json({message:error?.message});
    }
}


const UpdateTheToDo=async(req,res)=>{
    const {Task,completed}=req.body;
    const {id}=req.params;
const Todo=await ToDoModel.findById(id);
if(!Todo){
    return res.json({message:"Task not found"});
}

    if(!id){
        return res.json({message:"id is required"});
    }
    try {
        const ToDo=await ToDoModel.findByIdAndUpdate(id,{Task,completed});
        res.status(200).json({message:"Task updated successfully"});
    } catch (error) {
        res.status(400).json({message:error.message});
        
    }
}



const DeleteToDo=async(req,res)=>{
    const {id}=req.params;
    if(!id){
        return res.json({message:"id is required"});
    }
    try {
        const ToDo=await ToDoModel.findByIdAndDelete(id);
        res.status(200).json({message:"Task deleted successfully"});
    } catch (error) {
        res.status(400).json({message:error.message});
        
    }
}


module.exports={GetToDo,AddToDo,UpdateTheToDo,DeleteToDo}