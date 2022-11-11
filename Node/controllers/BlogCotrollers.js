import blogModel from "../models/BlogModels.js";

export const getallblogs = async (req, res )=>{
    try{
        const blogs = await blogModel.findAll();
        res.json(blogs);

    } catch(error){
        res.json({message : error.message})

    }

}
export const getBlog = async (req, res) => {
    try {
        const blog = await blogModel.findAll({
            where:{ id : req.params.id}
        });
        res.json(blog[0])
    } catch (error) {
        res.json({message : error.message})
    }

}
export const createBlogs = async (req, res) =>{
    try {
        await blogModel.create(req.body);
        res.json({
            "message":"Registro creado con exito"
        });
    } catch (error) {
        res.json({message : error.message})
    }

}

export const updateBlogs = async(req, res )=>{
    try {
        await blogModel.update(req.body, {
            where : {id : req.params.id}
        });
        res.json({
            "message":"Registro actualizado con exito"
        });
    } catch (error) {
        res.json({message : error.message})
    }

}

export const deleteBlogs = async(req , res)=> {
    try {
        await blogModel.destroy({
            where : {id : req.params.id}
        });
        res.json({
            "message":"Registro eliminado con exito"
        });
    } catch (error) {
        res.json({message : error.message})
    }

}



