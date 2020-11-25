const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/VoteMaranatha', {
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(() => console.log("connected to mongodb.."))
.catch(err => console.error("could not connect to mongodb", err));