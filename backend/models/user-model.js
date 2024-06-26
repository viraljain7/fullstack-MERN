// models/User.js
import mongoose from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

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
    if (user.isModified("password")) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword;
    }
    return next();
})


userSchema.methods.generateToken = function (password) {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin
            },
            process.env.JWT_SECRET_TOKEN,
            {
                expiresIn: process.env.JWT_SECRET_TOKEN_EXPIRY,
            }
        )
    } catch (error) {
        console.error(error)
    }
}
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema);

export default User;