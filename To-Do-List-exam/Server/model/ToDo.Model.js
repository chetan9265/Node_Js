const mongoose=require('mongoose');
const ToDoSchema=mongoose.Schema({
    Task:String,
    completed:Boolean
},{
    timestamps:true,
    versionKey:false
})

const ToDoModel=mongoose.model('ToDo',ToDoSchema);
module.exports=ToDoModel;