import ContactModel from "../models/contact-model.js";

export default async function contactForm(req, res) {
    try {
        const response = req.body;
        await ContactModel.create(response);
        return res.status(201).json({ message: "Message submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error via sending message" });
    }
}
