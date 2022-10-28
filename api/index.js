const server = require('./src/app.js');
const mongoose = require('mongoose')
require('dotenv').config()

const uri = `mongodb+srv://gabriel:${process.env.PASSWORD}@gabrieldb.eixmphj.mongodb.net/?retryWrites=true&w=majority`
async function connect(){
    try {
        await mongoose.connect(uri)
        console.log('connected to mongoDB')
    } catch (error) {
        console.error(error)
    }
}
connect()

server.listen(process.env.PORT, ()=> console.log(`server running on port ${process.env.PORT}`))