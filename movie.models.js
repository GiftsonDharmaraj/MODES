import { Schema, model } from "mongoose";
//write the schema
const schema=new Schema({
    title:{
        type:String,
        required: true,
        unique: true
    },
    desc:{
        type:String,
        required: true
    }
})

//create a model
const Movie=model("movie",schema)
export default Movie

