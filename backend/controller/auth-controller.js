import UserModel from "../models/user-model.js";

// -----------------------------
// Home Logic
// -----------------------------
const home = async (req, res) => {
    try {
        res.status(200).send("Home Page.")
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong")
    }
}



// -----------------------------
// Register Logic
// -----------------------------
const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body

        const userExist = await UserModel.findOne({ email })
        if (userExist) {
            res.status(400).json({ message: "user already exist" })
        }

        const createdUser = await UserModel.create({ username, email, phone, password })

        res.status(201).json({
            message: "Registration Successful",
            token: createdUser.generateToken(),
            userId: createdUser._id.toString()
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong,try Again later")
    }
}

// -----------------------------
// Login Logic
// -----------------------------
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await UserModel.findOne({ email });

        if (!userExist) {
            res.status(400).json({ message: "invalid user" })
        }

        const isPasswordCorrect = await userExist.isPasswordCorrect(password);

        if (isPasswordCorrect) {
            res.status(200).json({
                message: "Login Successful",
                token: userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }
        else {
            res.status(401).json({
                message: "Invalid Email or Password",
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Technical Error while Login"
        })
    }
}

export { home, register, login }