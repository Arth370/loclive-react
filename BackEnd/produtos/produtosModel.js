import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js";

export const ProdModel = conn.define(
    "produtos",
    {
        nome:{
            type: DataTypes.STRING,
            allowNull:false
        },
        marca:{
            type: DataTypes.STRING,
            allowNull:false
        },
        preco:{
            type: DataTypes.NUMBER,
            allowNull:false
        },
        descricao:{
            type: DataTypes.STRING,
            allowNull:false
        },
        estoque:{
            type:DataTypes.NUMBER,
            allowNull:false
        }
    },
    { //opções das tabelas
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'

    }
)

export default ProdModel