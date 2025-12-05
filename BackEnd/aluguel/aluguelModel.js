import { DataTypes } from "sequelize";
import { conn } from "../config/sequelize.js";

export const AlugModel = conn.define(
    "aluguel",
    {
        id_user:{
            type: DataTypes.NUMBER,
            allowNull:false
        },
        produto:{
            type: DataTypes.STRING,
            allowNull:false
        },
        forma_pagamento:{
            type: DataTypes.STRING,
            allowNull:false
        },
        preco_produto:{
            type: DataTypes.NUMBER,
            allowNull:false
        },
        quantidade:{
            type:DataTypes.NUMBER,
            allowNull:false
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    { //opções das tabelas
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'

    }
)

export default AlugModel