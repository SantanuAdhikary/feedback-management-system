const {Router} = require("express");
const { createProgram, allProgram, singleProgram, updateProgram, deleteProgram } = require("../controllers/trainingProgramController");

const router = Router();


router.post('/create-pgm', createProgram )
router.get('/all-pgm', allProgram )
router.get('/single-pgm/:id', singleProgram)
router.patch('/update-pgm/:id',updateProgram)
router.delete('/delete-pgm/:id', deleteProgram)

module.exports = router;