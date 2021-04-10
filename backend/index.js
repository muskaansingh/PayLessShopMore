const express = require('express');
// const cors = require('cors');

const app = express();


app.get("/", (req, res) => {
    return res.send("HomePage")
})

app.get("/login", (req, res) => {
    return res.send("Login")
})

app.listen(8000, ()=> {
    console.log("Running on port 8000!")
})