import { Sequelize } from "sequelize";

const db = new Sequelize('railway', 'root','4Vdn2fSIE3wqEmvSTXWG',{
    localhost:'containers-us-west-98.railway.app',
    dialect: 'mysql',
    port: '7310'

})

export default db