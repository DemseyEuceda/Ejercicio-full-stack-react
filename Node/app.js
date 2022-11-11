import express from "express";
import cors from "cors"
//importar la base de datos
import db from "./database/db.js";
//importar el enrutador
import blogRoutes from '../Node/routes/routes.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use('/blogs', blogRoutes);  

try {
    await db.authenticate();
    console.log('la conexion se realizo con exito')
} catch (error) {
    console.log('la conexion tuvo un error: ', error)
}

/**  app.get('/', (req, res)=>{
    res.send('hola que hace')
});*/
app.listen(8000, ()=>{
    console.log('el servidor esta corriendo en http://localhost:8000/');
});

 