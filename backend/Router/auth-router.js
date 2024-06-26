import express from "express"

const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).send("Hello world..")
})

export default router; 