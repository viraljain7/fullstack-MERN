// models/User.js
import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

//dont use arrow function bcz ()=>{} doesnt have this access in it
userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(user.password, salt)
    user.password = hashedPassword;
    next()
})


const User = mongoose.model('User', userSchema);

export default User;