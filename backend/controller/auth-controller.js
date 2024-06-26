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
// register Logic
// -----------------------------

const register = async (req, res) => {
    try {
        res.status(200).send("register Page.")
    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong")
    }
}

export { home, register }