const { Router } = require('express');
const router = Router();
const {getAllDogs, getDetails, getAllTemp, createDog} = require('../controllers/functions')

router.get('/breeds', getAllDogs)
router.get('/temps', getAllTemp)
router.get('/dog/:id', getDetails)
router.post('/create', createDog)

module.exports = router;