import express from "express"
import ContactForm from "../controller/contact-controller.js";


const contactRouter = express.Router();
contactRouter.route("/contact").post(ContactForm)


export default contactRouter; 