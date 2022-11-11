import express from "express";
import { createBlogs, deleteBlogs, getallblogs, getBlog, updateBlogs } from "../controllers/BlogCotrollers.js";


const router = express.Router();
//metodos get
router.get('/', getallblogs );
router.get('/:id',getBlog );

//metodos post
router.post('/', createBlogs);
 
//metodo put
router.put('/:id', updateBlogs );

//metodo delete 
router.delete('/:id', deleteBlogs);


export default router;