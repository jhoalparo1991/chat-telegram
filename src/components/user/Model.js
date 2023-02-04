const { model,Schema } = require('mongoose');

const userSchema = new Schema({
    fullname:{
        type: String,
        require:true,
        maxLength:50
    },
    email:{
        type: String,
        require:true,
        maxLength:120,
        unique:true
    },
    password:{
        type: String,
        require:true
    },
    photo:{
        type: String
    },
    token:{
        type: String
    },
    actived:{
        type: Boolean,
        default: false
    }
});

module.exports = model('users',userSchema);