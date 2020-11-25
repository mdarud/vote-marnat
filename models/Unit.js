const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    kandidat : {
        type : Map,
        of: String,
        required : true,
        unique : false
    }
});

const User = mongoose.model('User', UserSchema);