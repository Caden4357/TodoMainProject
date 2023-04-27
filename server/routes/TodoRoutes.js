const TodoController = require('../controllers/TodoController');
const {authenticate} = require('../config/jwt.config');
module.exports = app => {
    app.get('/api/allTodos', authenticate,  TodoController.getAllTodos)
    app.post('/api/newTodo', authenticate, TodoController.postTodo)
    app.delete('/api/deleteTodo/:id', TodoController.deleteTodo)
}