import express from "express";
import movieRoutes from "./routes/movies.route.js"
import connectDB from "./lib/db.js";
const app=express()
const port=6969;


//data understanding middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//connect mongooDB
connectDB()

app.get("/",(req,res)=>{
    res.json({msg:"hello world"})
});

app.use('/movies',movieRoutes);

app.listen(port,()=>{
    console.log(`server runs at http://localhost: ${port}`);
});