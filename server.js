const express = require("express");
const app = express();
const employeeRoute = require('./routes/employeeMasterRoutes')
const authRoute = require('./routes/authRoute')
const programRoute = require('./routes/trainingProgramRoute');
const courseRoute = require("./routes/courseRoute");
const facultyRoute = require("./routes/facultyRoute")
const participantRoute= require("./routes/participantRoute")
const feedbackRoute = require("./routes/feedbackRoute")

const mongoose = require("mongoose");
const errorHandler = require("./middleware/error");

let url = "mongodb://127.0.0.1:27017/feedbackManagement"

let connectDb= async()=>{
    await mongoose.connect(url);
    console.log("database connected")
}

connectDb();

app.use(express.json())
app.use('/emp', employeeRoute)
app.use('/emp/auth', authRoute)
app.use('/pgm', programRoute)
app.use('/course', courseRoute)
app.use('/faculty',facultyRoute)
app.use('/participant', participantRoute)
app.use('/feedback', feedbackRoute)


app.use(errorHandler) //! for handling error in json  format 

app.listen(5000,err=>{
    if(err) throw err;

    console.log('app is running')
})
