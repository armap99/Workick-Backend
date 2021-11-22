const router = require('express').Router();
const {getAllCounts,addCount,getCoutById} = require('../controllers/cuenta.controller')

router.get('/', getAllCounts)
router.post('/',addCount)
router.get('/:id',getCoutById)

module.exports = router