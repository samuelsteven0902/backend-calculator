import { Sequelize } from "sequelize";

const db = new Sequelize('kalkulator_db',"root","",{
    host:"localhost",
    dialect:"mysql",
})

export default db