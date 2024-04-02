const {Router} = require("express");
const { createParticipant, allParticipant, singleParticipant, updateParticipant, deleteParticipant } = require("../controllers/participatController");

const router = Router();

router.post('/create-participant', createParticipant)
router.get('/all-participant', allParticipant )
router.get('/single-participant/:id', singleParticipant)
router.patch('/update-participant/:id',updateParticipant)
router.delete('/delete-participant/:id', deleteParticipant)

module.exports = router;