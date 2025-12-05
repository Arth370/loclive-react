import AlugModel from "./aluguelModel.js";

export const listaralugueis = async(req,res,next)=>{
    try{
        const alugs = await AlugModel.findAll({
            attributes:["id","id_user","produto","forma_pagamento","preco_produto","quantidade","status"],
            order:[["created_at","DESC"]]
        })
        res.status(200).json([alugs])
    }catch(error){
        next(error)
    }
}

export const criaralugs = async (req,res,next)=>{
    console.log(req.body)

    const {id_user,produto,forma_pagamento,preco_produto,quantidade,status} = req.body

    try{
        if(!id_user){
            const err = new Error("O id é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!forma_pagamento){
            const err = new Error(" forma de pagamento é obrigatória")
            err.statusCode = 400
            throw err
        }
        if(!produto){
            const err = new Error("O campo produto é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!preco_produto){
            const err = new Error("O campo preco_produto é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!quantidade){
            const err = new Error("O campo quantidade é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!status){
            const err = new Error("O campo status é obrigatório")
            err.statusCode = 400
            throw err
        }

        const novoAlug = await AlugModel.create({id_user,produto,forma_pagamento,preco_produto,quantidade,status})
        res.status(201).json({mensagem: "aluguel Criado",novoAlug})
    }catch(error){
        next(error)
    }
}

