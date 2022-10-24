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
        console.error(error)
    }
}

const getAllTemp = async(req, res) => {
    try {
        const temperaments = await Temperment.find()
        if(!temperaments.length){
            const apiDogs = await axios.get('https://api.thedogapi.com/v1/breeds')
            const temp = []
            for (let i = 0; i < 100; i++) {
                await apiDogs.data[i].temperament.split(',').map(a => temp.push(a))
            }
            const newTemps = temp.filter(a => /^[a-zA-Z]+$/.test(a))
            const allTemp = [...new Set(newTemps)]
            allTemp.map(async(t)=> await Temperment.create({ name: t }))
            const allTemperaments = await Temperment.find()
            res.send(allTemperaments)
        } else return res.send(temperaments)
    } catch (error) {
        console.error(error)
    }
}

const getAllDogs = async(req, res) => {
    const {breed} = req.query
    try {
        const dogs = await Dog.find()
        if(breed){
            const foundDogs = await dogs.filter(d => d.name.toLocaleLowerCase().includes(breed.toLowerCase()))
            if(foundDogs.length) return res.send(foundDogs)
            else return res.send(`no breeds found by ${breed}`)
        }
        if(!dogs.length){
            await getAllDogsToDB()
            const doggys = await Dog.find()
            return res.send(doggys)
        } else res.send(dogs)
    } catch (error) {
        console.error(error)
    }
}

const createDog = async(req, res) => {
    const {name, height, weight, image, temperments, years} = req.body
    try {
        await Dog.create({
            name,
            height: {
                min: height.min,
                max: height.max
            },
            weight: {
                min: weight.min,
                max: weight.max
            },
            image,
            years,
            temperments
        })
        res.send('new dog created successfully')
    } catch (error) {
        console.error(err)
    }
}

const getDetails = async(req, res) => {
    const {id} = req.params
    try {
        const dog = await Dog.findById(id)
        res.json(dog)
    } catch (error) {
        console.error(error)
    }
}

const editDog = async(req, res) => {
    const {id} = req.params
    const {name, height, weight, image, temperments, years} = req.body
    try {
        await Dog.findByIdAndUpdate(id, {
            name,
            height: {
                min: height.min,
                max: height.max
            },
            weight: {
                min: weight.min,
                max: weight.max
            },
            image,
            years,
            temperments
        })
        res.send('updated')
    } catch (error) {
        console.error(error)
    }
}

const deleteDog = async(req, res) => {
    const {id} = req.params
    try {
        await Dog.findByIdAndDelete(id)
        res.send('deleted')
    } catch (error) {
        console.error(error)
    }
}
module.exports = {getAllDogs, createDog, getDetails, getAllTemp, editDog, deleteDog};