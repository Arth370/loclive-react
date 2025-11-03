import React from 'react'
import './cadastro.css'

function Cadastro() {
  return (
    <>
    <div class="FundoCadastro">
      <div class="Centro">
        <h1>Cadastre-se</h1>
      </div>
      <div class="Nome">
        <h2>Nome<span>*</span></h2>
        <input class="Input" type="text"/>
      </div>
      <div class="Email">
        <h2>Email<span>*</span></h2>
        <input class="Input" type="text"/>
      </div>
      <div class="Telefone">
        <h2>Telefone<span>*</span></h2>
        <input class="Input" type="text"/>
      </div>
      <div class="Senha">
        <h2>Senha<span>*</span></h2>
        <input class="Input" type="text"/>
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
        <button id="botao"><h2>Cadastrar</h2></button>
        <div id="pergunta">
          <h4>Já se cadastrou?</h4>
          <h4 class="Entrar">Entrar</h4>
        </div>
      </div>
    </div>
  </>
  )
}

export default Cadastro