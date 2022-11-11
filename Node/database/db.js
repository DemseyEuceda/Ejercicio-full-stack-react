import Sequelize from 'sequelize';

const db = new Sequelize('Database_app','root' ,'1234',{
    host:'localhost',
    dialect: 'mysql'
}) 

export default db;