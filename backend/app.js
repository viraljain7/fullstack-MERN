import express from "express"
import authRouter from "./router/auth-router.js";
import connectDB from "./db/connectDB.js";
import errorMiddleware from "./middleware/error-middleware.js";
import contactRouter from "./router/contact-router.js";

import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})


const app = express();
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)
app.use(errorMiddleware)

const port = process.env.PORT || 5000

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log("ERROR:: ", err);
        })
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

    })
    .catch((error) => {
        console.error("MONGODB CONNECTION FAILED::", error);
        throw error;
    })