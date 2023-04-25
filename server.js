const express = require("express")
const path = require('path');
const app = express()

app.get("/", (req, res) => { 
    res.send("<h1>student record app hosted on express server</h1><a href='/students-record'>student record app </a>") 
})

app.get("/students-record", (req, res) => {
    res.sendFile(path.join(__dirname, '/student_records.html'))
})

app.listen(4000, () => {
    console.log("Server is listing on 4000")
})
