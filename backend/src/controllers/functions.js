const axios = require('axios')
const Dog = require('../models/Dog')
const Temperment = require('../models/Temperment')

const getAllDogsToDB = async() => {
    try {
        const apiDogs = await axios.get('https://api.thedogapi.com/v1/breeds')
        for (let i = 0; i < 100; i++) {
            await Dog.create({
                name: apiDogs.data[i].name,
                height: {
                    min: apiDogs.data[i].height.metric.split(' - ')[0], 
                    max: apiDogs.data[i].height.metric.split(' - ')[1]
                },
                weight: {
                    min: apiDogs.data[i].weight.metric.split(' - ')[0], 
                    max: apiDogs.data[i].weight.metric.split(' - ')[1]
                },
                image: apiDogs.data[i].image.url,
                temperments: apiDogs.data[i].temperament.split(', '),
                years: apiDogs.data[i].life_span
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const getAllDogs = async(req, res) => {
    try {
        const dogs = await Dog.find()
        if(!dogs.length){
            await getAllDogsToDB()
            const doggys = await Dog.find()
            return res.send(doggys)
        } else res.send(dogs)
    } catch (error) {
        console.log(error)
    }
}




module.exports = {getAllDogs};