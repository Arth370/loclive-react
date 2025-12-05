import React, { useState,useEffect } from "react";
import Cabecario from "./Cabecario";
import Footer from "./Footer";
import "./ProdutosAlugados.css";
import { Link } from 'react-router-dom';

function ProdutosAlugados() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("todos");

      const [alugueis, setAlugueis] = useState([])
      const [loading,setLoading] = useState(true)
      const [recarregar,SetRecarregar] = useState(false)
      let PrecoTotal = 0
      let ProdsTotal = 0
      let SttsTotal = 0
      let Array = []


  useEffect(()=>{
          const fetchUsers = async ()=>{
              try{
                  const coisa = await fetch('http://localhost:3333/api/alugueis')
                  if(!coisa.ok){
                      throw new Error("error a buscar alugueis")
                  }
                  const data = await coisa.json()
                  
                  setAlugueis(data[0])
              }catch(error){
                  console.log(error)
              }finally{
                  setLoading(false)
                }
              }
          fetchUsers()
          
      },[setLoading])
function fecharPopUp(){
        const meuPopUp = document.getElementById('meuPopUp');
        meuPopUp.classList.remove('modal-overlay')
        meuPopUp.classList.add('none')
        const fundo = document.getElementById('alug-caixa')
        const prodstudao = document.getElementById('prodstotal')
        const precotudao = document.getElementById('precototal')
        const statustudao = document.getElementById('status')
        const span = document.getElementById('span-status')

        for(let i=0;i<alugueis.length;i++){
          if(alugueis[i].id_user==localStorage.getItem('id')){
            PrecoTotal = PrecoTotal + (alugueis[i].preco_produto*alugueis[i].quantidade)
            ProdsTotal++
            SttsTotal++

            const div = document.createElement('div')
            const infos = document.createElement('div')
            const nome = document.createElement('h2')
            const preco = document.createElement('p')
            const qnt = document.createElement('p')
            const status = document.createElement('p')
            fundo.appendChild(div)
            div.appendChild(infos)
            infos.appendChild(nome)
            infos.appendChild(preco)
            infos.appendChild(qnt)
            infos.appendChild(status)
            nome.textContent=alugueis[i].produto
            preco.textContent=`R$ ${alugueis[i].preco_produto}`
            status.textContent=`Status: ${alugueis[i].status}`
            qnt.textContent=`quantidade:${alugueis[i].quantidade}`
            precotudao.textContent=PrecoTotal
            prodstudao.textContent=ProdsTotal
            statustudao.textContent=SttsTotal
            span.textContent='100% do Total'
            div.classList.add('item-alug')
            infos.classList.add('alug-info')
            status.classList.add('status')
          }
        }
      
}
  return (
    <>
      <Cabecario />
      <div id="separar"></div>


  

      <div className="produtos-alugados-container">


        <h1 className="titulo">Produtos Alugados</h1>
        <p className="subtitulo">Gerencie seus aluguéis e acompanhe os pagamentos</p>


        {/* === CARDS DE ESTATÍSTICAS === */}
        <div className="linha-cards">
          <div className="card-info-alug2">

            <p>Total de Aluguéis</p>
            <h2 id="prodstotal">{ProdsTotal}</h2>
            <span>produtos ativos</span>
          </div>

          <div className="card-info-alugados">
            <p>Receita Mensal</p>
            <h2 id="precototal">R$ {PrecoTotal}</h2>
            <span>total previsto</span>
          </div>

          <div className="card-info-alugados">
            <p>Pagamentos em Dia</p>
            <h2 id="status">0</h2>
            <span id="span-status">0% do total</span>
          </div>

          <div className="card-info-alugados">
            <p>Atrasados</p>
            <h2>0</h2>
            <span>nenhum atraso</span>
          </div>
        </div>

        {/* === BUSCA + FILTROS === */}
        <div className="filtros-area">
          <input
            type="text"
            className="input-busca"
            placeholder="🔍 Buscar por produto ou cliente..."
          />

          <div className="filtros-botoes">
            <button
              className={filtroSelecionado === "todos" ? "ativo" : ""}
              onClick={() => setFiltroSelecionado("todos")}
            >
              Todos
            </button>

            <button
              className={filtroSelecionado === "emdia" ? "ativo" : ""}
              onClick={() => setFiltroSelecionado("emdia")}
            >
              Em Dia
            </button>

            <button
              className={filtroSelecionado === "pendente" ? "ativo" : ""}
              onClick={() => setFiltroSelecionado("pendente")}
            >
              Pendente
            </button>

            <button
              className={filtroSelecionado === "atrasado" ? "ativo" : ""}
              onClick={() => setFiltroSelecionado("atrasado")}
            >
              Atrasado
            </button>
          </div>
        </div>

        {/* === LISTA VAZIA === */}
        <div className="caixa-alugueis" id="alug-caixa">
                    {Array.map((objeto)=>(
              <div className="item-alug" key={objeto}>
              <div className="alug-info">
                <h2>{objeto.produto}</h2>
                <p>R$ {objeto.preco_produto}</p>
              </div>
              <div className="controle-qtd">
                
                <span>{objeto.quantidade}</span>
                
              </div>
            </div>
          ))}
        </div>

      </div>
      <div id="separar"></div>
        <div id='meuPopUp' class="modal-overlay">
        <div class="modal-conteudo">

            <span class="fechar-btn" onClick={fecharPopUp}>&times;</span>
            
            <h2 id='produto-nome'>Bem-vindo a Sua página de alugueis!</h2>
            <img id='imagem' src='' alt="" />
            <p id='preco'>aqui você pode ver seus itens alugados, e analisar se o pagamento está em dia!</p>
        </div>
        </div>
      <Footer />
    </>
  );
}

export default ProdutosAlugados;
