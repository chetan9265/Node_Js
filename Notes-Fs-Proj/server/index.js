const express=require("express");
const connection = require("./db");
const UserRoute = require("./Routes/User.routes");
const NotesRoute = require("./Routes/Notes.Routes");
const cors=require("cors")
const app=express();
app.use(express.json())
const dotenv=require("dotenv");
const cookieParser = require("cookie-parser");
app.use(express.static("./Uploads"))
app.use(cors({
    origin: ["http://localhost:5173","https://client-psi-pink.vercel.app/",],
    credentials:true
}));
app.use(cookieParser())
app.use("/",UserRoute);
app.use("/notes",NotesRoute)
dotenv.config()
app.listen(process.env.port  ,()=>{
    try {
      connection
        console.log("http://localhost:8080/")
    } catch (error) {
        console.log(error)
    }
})