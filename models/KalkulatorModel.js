import { Sequelize } from "sequelize";
import db from '../dbConfig/DataBase.js'

const { DataTypes } = Sequelize;

const RiwayatKalkulator = db.define(
    "riwayat_kalkulator",
    {
        hasil:DataTypes.STRING,
    },
    {
        freezeTableName: true
    }
)


export default RiwayatKalkulator

(async () =>{
    await db.sync();
})();