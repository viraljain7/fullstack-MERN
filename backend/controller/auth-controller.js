// -----------------------------
// Home Logic
// -----------------------------

import UserModel from "../models/user-model.js";

const home = async (req, res) => {
    try {
        res.status(200).send("Home Page.")
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong")
    }
}


// -----------------------------
// register Logic
// -----------------------------

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body

        const userExist = await UserModel.findOne({ email })
        if (userExist) {
            res.status(400).json({ message: "user already exist" })
        }

        const createdUser = await UserModel.create({ username, email, phone, password })

        res.status(200).json({ message: createdUser })
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong")
    }
}

export { home, register }