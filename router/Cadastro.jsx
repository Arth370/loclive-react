import { useState,useEffect} from 'react'
import React from 'react'
import './cadastro.css'
import { Link } from 'react-router-dom'

function Cadastro() {
  const [formData, setFormData] = useState({
    nome:'',
    email: '',
    telefone: Number,
    senha:'',

  })
  const handleFormEdit = (event,name)=>{
    setFormData({
      ...formData,
      [name]:event.target.value
    })
  }
  const handleForm = async (event) =>{
    try{
      event.preventDefault()
      const response = await fetch(`http://localhost:3333/api/users`,{
        method:'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      console.log(response.status)
      console.log(json)
    }catch(err){
      console.log(err)
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
        <input class="Input" type="text" value={formData.nome} onChange={(e) =>{handleFormEdit(e,'nome')}}/>
      </div>
      <div class="Email">
        <h2>Email<span>*</span></h2>
        <input class="Input" type="text" value={formData.email} onChange={(e) =>{handleFormEdit(e,'email')}}/>
      </div>
      <div class="Telefone">
        <h2>Telefone<span>*</span></h2>
        <input class="Input" type="number"value={formData.telefone} onChange={(e) =>{handleFormEdit(e,'telefone')}}/>
      </div>
      <div class="Senha">
        <h2>Senha<span>*</span></h2>
        <input class="Input" type="text"value={formData.senha} onChange={(e) =>{handleFormEdit(e,'senha')}}/>
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
        <button id="botao" onClick={handleForm}><h2>Cadastrar</h2></button>
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