import express from "express";
import { 
    moviesUpdates, 
    moviesCreate, 
    moviesDelete,
    moviedetails,
    moviesIndex } from "../controllers/movies.controller.js";
const router=express.Router();
//do some CRUD operation
//for read
router.get("/",moviesIndex);

//for creation movies
router.post("/",moviesCreate)

//for movie details
router.get('/:id',moviedetails)

//for updates
router.put('/:id',moviesUpdates)

 //for delete
 router.delete('/:id',moviesDelete)

 //doubt
 export default router;