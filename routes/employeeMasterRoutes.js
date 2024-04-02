const {Router} = require("express");
const { createEmployee, allEmployee, singleEmp, updateEmp, deleteEmp } = require("../controllers/employeeMasterController");
const { protect, authorize } = require("../middleware/auth");

const router = Router();



// router.post('/create-emp',[protect,authorize('admin')],createEmployee)
// router.post('/create-emp',createEmployee)
router.get('/all-emp',[protect,authorize('admin')], allEmployee)
router.get('/all-emp', allEmployee)
router.get('/single-emp/:id', singleEmp)
router.patch('/update-emp/:id',updateEmp)
router.delete('/delete-emp/:id', deleteEmp)

module.exports = router;