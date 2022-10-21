const { Router } = require('express');
const router = Router();
const {getAllDogs, getDetails, getAllTemp, createDog} = require('../controllers/functions')

router.get('/', getAllDogs)
router.get('/temps', getAllTemp)
router.get('/:id', getDetails)
router.post('/create', createDog)

module.exports = router;