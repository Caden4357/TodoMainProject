const Todo = require('../models/todoModel');

module.exports = {
    getAllTodos: async (req, res) => {
        try{
            const allTodos = await Todo.find({});
            res.status(200).json(allTodos);
        }
        catch(err){
            res.status(400).json(err);
        }
    },
    postTodo: async (req, res) => {
        try{
            const newTodo = await Todo.create(req.body);
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