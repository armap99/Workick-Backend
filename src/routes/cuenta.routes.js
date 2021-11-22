const router = require('express').Router();
const {getAllAccounts,addAccounts,getAccountsById,getAllWorkerAccounts} = require('../controllers/cuenta.controller')

router.get('/', getAllAccounts)
router.post('/',addAccounts)
router.get('/trabajadores',getAllWorkerAccounts)


router.get('/:id',getAccountsById)

module.exports = router