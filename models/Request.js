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
    }
})

const Request = mongoose.model('Request',requestSchema)
module.exports = Request