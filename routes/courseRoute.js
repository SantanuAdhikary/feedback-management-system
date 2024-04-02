const {Router} = require("express");
const { createCourse, allCourse, singleCourse, updateCourse } = require("../controllers/courseController");
const router = Router();


router.post('/create-course', createCourse )
router.get('/all-course', allCourse )
router.get('/single-course/:id', singleCourse)
router.patch('/update-course/:id',updateCourse)
module.exports = router;