import { Sequelize } from "sequelize";

const db = new Sequelize('database_Talent_project', 'root','',{
    host:'localhost',
    dialect: 'mysql',
   /*  port: '7310' */

})

export default db