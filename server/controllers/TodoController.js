const Todo = require('../models/todoModel');
const jwt = require('jsonwebtoken');
module.exports = {
    getAllTodos: async (req, res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true});
            const username = decodedJwt.payload.username
            const allTodos = await Todo.find({username:username}).sort({priority:'desc'});
            res.status(200).json(allTodos);
        }
        catch(err){
            res.status(400).json(err);
        }
    },
    postTodo: async (req, res) => {
        try{
            const decodedJwt = jwt.decode(req.cookies.userToken, {complete:true});
            const todo = {...req.body, username:decodedJwt.payload.username}
            const newTodo = await Todo.create(todo);
            res.status(201).json(newTodo);
        }
        catch(err){
            res.status(400).json(err);
        }
    },
    deleteTodo: async (req, res) => {
        try{
            await Todo.deleteOne({_id: req.params.id})
            res.status(200).json({message:'Successfully deleted todo'})
        }
        catch(err){
            res.status(400).json(err);
        }
    }
}