const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, 'Todo must have a title'],
        mingLength:[2, 'Must be 2 or more characters']
    },
    description:{
        type:String,
        maxLength:[255, 'The description is too long']
    },
    priority:{
        type:Number,
        enum:[1, 2, 3, 4],
        required:[true, 'This field is required']
    },
    reaccuring:{
        type:Boolean,
        required:[true, 'This field is required']
    },
    username:{
        type: String,
        required:[true, 'must have a username']
    }
}, {timestamps:true})

module.exports = mongoose.model('Todo', TodoSchema);

