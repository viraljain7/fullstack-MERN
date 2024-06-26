import express from "express"
import { home, register } from "../controller/auth-controller.js";

const router = express.Router();
router.route("/").get(home)
router.route("/register").get(register)


export default router; 