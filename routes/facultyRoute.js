const {Router}= require("express");
const { createFaculty, allFaculty, singleFaculty, updateFaculty, deleteFaculty } = require("../controllers/facultyControllers");

const router = Router();

router.post('/create-faculty', createFaculty )
router.get('/all-faculty', allFaculty )
router.get('/single-faculty/:id', singleFaculty)
router.patch('/update-faculty/:id',updateFaculty)
router.delete('/delete-faculty/:id', deleteFaculty)
module.exports = router;