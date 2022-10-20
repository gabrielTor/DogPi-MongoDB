const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dogSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    height:{
        min: { type: Number },
        max: { type: Number }
    },
    weight:{
        min: { type: Number },
        max: { type: Number }
    },
    years:{
        type: String
    },
    image:{
        type: String,
        default: 'https://www.dogpackapp.com/public/img/default-park.png'
    },
    temperments:{
        type: [String]
    }
})

module.exports = mongoose.model('Dog', dogSchema)