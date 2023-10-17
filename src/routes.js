const Router = require("express").Router;
const userController = require("./controllers/user-controller");
const authMiddleware = require("./middleware/auth-middleware");
const { body } = require("express-validator");

const router = new Router();

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 4, max: 32 }),
  userController.register
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", authMiddleware, userController.getUsers);

module.exports = router;
