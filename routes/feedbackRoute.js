const {Router}= require("express");
const { createFeedback, allFeedback, singleFeedback, updateFeedback, deleteFeedback } = require("../controllers/feedbackController");


const router = Router();

router.post('/create-feedback', createFeedback )
router.get('/all-feedback', allFeedback )
router.get('/single-feedback/:id', singleFeedback)
router.patch('/update-feedback/:id',updateFeedback)
router.delete('/delete-feedback/:id', deleteFeedback)

module.exports = router;