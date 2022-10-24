import { Sequelize } from "sequelize";

const db = new Sequelize('database_Talent_project', 'root','',{
    host:'localhost',
    dialect: 'mysql'
})

export default db