const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tempermentSchema = new Schema({
    name: String
})

module.exports = mongoose.model('Temperment', tempermentSchema)