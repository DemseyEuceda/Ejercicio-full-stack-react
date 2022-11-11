import db from "../database/db.js";

import  DataType  from "sequelize";

const blogModel = db.define('blogs',{
                            title :{type : DataType.STRING},
                            content:{type : DataType.STRING},
                            
})
export default blogModel;