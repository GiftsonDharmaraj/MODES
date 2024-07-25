import Movie from "../models/movie.models.js";

export const moviesIndex= async(req,res)=>{
    try {
       const movies= await Movie.find()
       res.json(movies)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

export const moviedetails= async(req,res)=>{
    try {
        const mov= await Movie.findById(req.params.id)

        if(mov == null){
            res.status(404).json({message:"movie can't found "})
        }
        else{
            res.json(mov)
        }
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
}

export const moviesCreate =async (req,res)=>{
    //id,title,desc

  // Create a new movie document
  const newmovie = new Movie({
    title: req.body.title, // Assuming title is passed correctly as a string in req.body
    desc: req.body.desc})
try {
    const movie=await newmovie.save();
    return res.status(201).json(movie)
    
} catch (error) {
    return res.status(400).json({message: error.message})

}

};

export const moviesUpdates=async(req,res)=>{
    try {
        const updatedMovie=await Movie.findByIdAndUpdate(
            {_id:req.params.id},
            {title:req.body.title,
             desc:req.body.title
            },
            {
                new:true
            }
        );
        res.status(200).json(updatedMovie)
    } catch (error) {
        res.status(400).json({message:error.message});
    }
   
}
export const moviesDelete=async(req,res)=>{
    const movieId= req.params.id
try {
    {
        await Movie.deleteOne({_id:movieId})
        res.json({message:"movie deleted!"})
    }
} catch (error) {
    res.status(500).json({message:error.message})
    
}
};
