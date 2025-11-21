import userModel from "./UserModel.js";

export const listarUsers = async(req,res,next)=>{
    try{
        const users = await userModel.findAll({
            attributes:["id","nome","email","telefone","senha"],
            order:[["created_at","DESC"]]
        })
        res.status(200).json({users})
    }catch(error){
        next(error)
    }
}

export const criarUsers = async (req,res,next)=>{
    console.log(req.body)

    const {nome,email,telefone,senha} = req.body

    try{
        if(!nome){
            const err = new Error("O campo Nome é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!email){
            const err = new Error("O campo Email é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!telefone){
            const err = new Error("O campo Telefone é obrigatório")
            err.statusCode = 400
            throw err
        }
        if(!senha){
            const err = new Error("O campo Senha é obrigatório")
            err.statusCode = 400
            throw err
        }

        const novoUser = await userModel.create({nome,email,telefone,senha})
        res.status(201).json({mensagem: "Usuário Criado",novoUser})
    }catch(error){
        next(error)
    }
}
export const attUser = async (req,res,next)=>{
    const id = req.params.id
    const {nome,email,telefone,senha} = req.body
    try{
        if(!id){
            const err = new Error("o ID é obrigatório")
            err.statusCode = 400
            throw err
        }
        const user = await userModel.findByPk(id,{
            attributes:["id", "nome", "email", "telefone", "senha"]
        })
        if(nome !== undefined){
            user.nome = nome
        }
        if(email !== undefined){
            user.email = email
        }
        if(telefone !== undefined){
            user.telefone = telefone
        }
        if(senha !== undefined){
            user.senha = senha
        }
        await user.save();
        res.status(200).json({user})
    }catch(error){
        next(error)
    }
}

