const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dbCloud:$GET(PRO)@cluster0-bzeio.mongodb.net/Enquiry?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('DB Connection established !')
})
.catch((err)=>{
    process.exit()
})
const app = require('./app')

app.listen(process.env.PORT,()=>{
    console.log("Server running on PORT "+process.env.PORT+"!")
})