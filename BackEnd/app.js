import express, {response} from "express"
import cors from "cors"
import {conn} from "./config/sequelize.js"
import { errorHandler } from "./middleware/errorHandler.js";
import {userModel} from "./users/UserModel.js"

import UserRoutes from "./users/UserRoutes.js"
import produtosRoutes from "./produtos/produtosRoutes.js"
import aluguelRoutes from './aluguel/aluguelRoutes.js'

const app = express()

conn.sync()

app.use(cors({
    origin: "*", //https://www.google.com
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))
app.use(express.json())

app.use("/api/produtos",produtosRoutes);

app.get("/api/produtos",(req,res)=>{
    res.status(200).json("App")
})

app.use("/api/alugueis",aluguelRoutes);

app.get("/api/alugueis",(req,res)=>{
    res.status(200).json("App")
})

app.use("/api/users", UserRoutes);

app.get("/api/users",(req,res)=>{
    res.status(200).json("App")
})

app.use((req,res)=>{
    res.status(404).json({mensagem: "Recurso não encontrado"})
})

app.use(errorHandler)

export default app