const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://abc:123@cluster0.zbrsy.mongodb.net/test',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(ok =>console.log("Connected to mongodb"))
.catch(err =>console.log("mongodb connection error",err))

module.exports = mongoose;