const TodoController = require('../controllers/TodoController');

module.exports = app => {
    app.get('/api/allTodos', TodoController.getAllTodos)
    app.post('/api/newTodo', TodoController.postTodo)
    app.delete('/api/deleteTodo/:id', TodoController.deleteTodo)
}