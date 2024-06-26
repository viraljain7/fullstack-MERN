import express from "express"
import router from "./router/auth-router.js";

const app = express();

app.use("/api/auth", router)






const PORT = 5000;
app.listen(PORT, () => {
    console.log('RUNNING ON PORT :: ', PORT);
})