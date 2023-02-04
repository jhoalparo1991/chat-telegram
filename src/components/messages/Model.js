const { model,Schema,ObjectId } = require('mongoose');

const messageSchema = new Schema({
    user_id:{
        type: ObjectId,
        require:true,
        maxLength:50
    },
    message:{
        type: String,
        require:true,
        maxLength:120,
        unique:true
    },
    date:{
        type: Date,
        default:Date.now()
    }
});

module.exports = model('messages',messageSchema);