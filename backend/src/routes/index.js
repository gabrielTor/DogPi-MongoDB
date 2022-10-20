const { Router } = require('express');
const router = Router();
const {getAllDogs} = require('../controllers/functions')

router.get('/', getAllDogs)


module.exports = router;