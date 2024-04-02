const {Router} = require("express");
const { registerController, loginController } = require("../controllers/authController");

const router = Router();



router.post('/register',registerController)
router.post('/login', loginController)


module.exports = router;