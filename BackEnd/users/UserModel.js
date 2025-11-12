import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js";

export const userModel = conn.define(
    "users",
    {
        nome:{
            type: DataTypes.STRING,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        telefone:{
            type: DataTypes.NUMBER,
            allowNull:false
        },
        senha:{
            type: DataTypes.STRING,
            allowNull:false
        }
    },
    { //opções das tabelas
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'

    }
)

export default userModel