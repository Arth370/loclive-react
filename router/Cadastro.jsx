import { useState,useEffect, use} from 'react'
import React from 'react'
import './cadastro.css'
import { Link } from 'react-router-dom'

function Cadastro() {
const [nome,setNome] = useState("")
const [email,setEmail] = useState("")
const [telefone,setTelefone] = useState(Number)
const [senha,setSenha] = useState("")
const handleSubmit = async(event) =>{
  event.preventDefault()
  console.log(nome,email,telefone,senha)
  const user ={
    nome:nome,
    email:email,
    telefone:telefone,
    senha:senha
  }
  try{
    const response = await fetch('http://localhost:3333/api/users',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    })
    const data = await response.json()
    if(response.ok){
      alert("Usuario cadastrado")
    }else{
      alert(`Errp: ${data.message}`)
    }

  }catch(error){
    console.log(error)
  }
}
  return (
    <>
    <div class="FundoCadastro">
      <div class="Centro">
        <h1>Cadastre-se</h1>
      </div>
      <div class="Nome">
        <h2>Nome<span>*</span></h2>
        <input class="Input" type="text" value={nome} onChange={event => setNome(event.target.value )} />
      </div>
      <div class="Email">
        <h2>Email<span>*</span></h2>
        <input class="Input" type="text" value={email} onChange={event => setEmail(event.target.value )} />
      </div>
      <div class="Telefone">
        <h2>Telefone<span>*</span></h2>
        <input class="Input" type="number" value={telefone} onChange={event => setTelefone(event.target.value )}/>
      </div>
      <div class="Senha">
        <h2>Senha<span>*</span></h2>
        <input class="Input" type="text" value={senha} onChange={event => setSenha(event.target.value )}/>
      </div>
      <div class="Confirmar">
        <h2>Confirmar Senha<span>*</span></h2>
        <input class="Input" type="text"/>
      </div>
      <div class="Concordo">
        <input type="checkbox"/>
        <h4>Eu concordo em receber conteúdo promocional relacionado<br></br> com os produtos e serviços da LocLive</h4>
      </div>
      <div class="Centro">
        <button id="botao" onClick={handleSubmit}><h2>Cadastrar</h2></button>
        <div id="pergunta">
          <h4>Já se cadastrou?</h4>
          <Link class="linkC" to={'/Login'}><h4 class="Entrar">Entrar</h4></Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cadastro