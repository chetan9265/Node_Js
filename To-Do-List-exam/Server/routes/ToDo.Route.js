const express=require('express');
const { GetToDo, AddToDo, UpdateTheToDo, DeleteToDo } = require('../controler/ToDo');
const ToDoRoutes=express.Router();
ToDoRoutes.get('/',GetToDo)
ToDoRoutes.post('/',AddToDo)
ToDoRoutes.put('/:id',UpdateTheToDo)
ToDoRoutes.delete('/:id',DeleteToDo)
module.exports=ToDoRoutes