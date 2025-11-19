import ProdModel from "./produtosModel.js";

export const listarprods = async(req,res,next)=>{
    try{
        const prods = await ProdModel.findAll({
            attributes:["id","nome","marca","preco","descricao","estoque"],
            order:[["created_at","DESC"]]
        })
        res.status(200).json([prods])
    }catch(error){
        next(error)
    }
}

export const criarprods = async (req,res,next)=>{
    console.log(req.body)

    const {nome,marca,preco,descricao,estoque} = req.body

    try{
        if(!nome){
            const err = new Error("O campo Nome é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!marca){
            const err = new Error("O campo marca é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!preco){
            const err = new Error("O campo preco é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!descricao){
            const err = new Error("O campo descricao é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!estoque){
            const err = new Error("O campo estoque é obrigatório")
            err.statusCode = 400
            throw err
        }

        const novoProd = await ProdModel.create({nome,marca,preco,descricao,estoque})
        res.status(201).json({mensagem: "Produto Criado",novoProd})
    }catch(error){
        next(error)
    }
}

