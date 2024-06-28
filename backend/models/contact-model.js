import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    message: {
        type: String,
        required: true,
        trim: true,
    }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
