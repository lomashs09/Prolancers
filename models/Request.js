const mongoose = require('mongoose')
const requestSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    },
    createtOn:{
        type:Date,
        default:Date.now
    }
})

const Request = mongoose.model('Request',requestSchema)
module.exports = Request