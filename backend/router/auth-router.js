import express from "express"
import { home, register, login } from "../controller/auth-controller.js";
import validator from "../middleware/validate-middleware.js";
import signupSchema from "../validators/auth-validator.js";

const router = express.Router();
router.route("/").get(home)
router.route("/register").post(validator(signupSchema), register)
router.route("/login").post(login)



export default router; 