import React, { useState } from 'react';
import './Carrinho.css';
import Cabecario from './Cabecario';
import Footer from './Footer';
import { Link } from 'react-router-dom';

let loading = true
const allItems=[]
let total = 0
let value

function Carrinho() {

  

  function iniciar(){
        for (let i = 0; i < localStorage.length; i++) {
        // Obtém o nome da chave pelo índice
        const chave = localStorage.key(i);
        
        
        // Obtém o valor associado a essa chave
       
        if(chave != 'nome' && chave!='senha'&& chave!='email'){
          allItems[chave] = JSON.parse(localStorage.getItem(chave));
         
          total = total + (allItems[chave].preco * allItems[chave].qnt)
          
        }
    }
  }
  if(loading){
    iniciar()
    loading=false
    
    
  }
  const objetos = Object.values(allItems)
  console.log(total)

  // Carrinho começa vazio
 

  const [metodo, setMetodo] = useState('cartao');




  return (
    <>
      <Cabecario />
      <div id="separar"></div>

      <div className="carrinho-fundo">
        <div id='conteudo-do-carrinho' className="carrinho-conteudo">
          <h1 className="titulo-carrinho">🛒 Seu Carrinho</h1>

          {/* MENSAGEM QUANDO ESTIVER VAZIO */}
          {}

          {/* LISTAGEM DINÂMICA */}
          {objetos.map((objeto)=>(
              <div className="item-carrinho" key={objeto}>
              <div className="item-info">
                <h2>{objeto.produto}</h2>
                <p>R$ {objeto.preco}</p>
              </div>
              <div className="controle-qtd">
                
                <span>{objeto.qnt}</span>
                
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <h2 className="total">Total: R$ {total}</h2>

          {/* MÉTODOS DE PAGAMENTO */}
          <div className="pagamento">
            <h3>Método de Pagamento</h3>
            <div className="opcoes-pagamento">
              <label>
                <input
                  type="radio"
                  name="metodo"
                  value="cartao"
                  checked={metodo === 'cartao'}
                  onChange={(e) => setMetodo(e.target.value)}
                />
                💳 Cartão de Crédito
              </label>
              <label>
                <input
                  type="radio"
                  name="metodo"
                  value="pix"
                  checked={metodo === 'pix'}
                  onChange={(e) => setMetodo(e.target.value)}
                />
                ⚡ PIX
              </label>
              <label>
                <input
                  type="radio"
                  name="metodo"
                  value="boleto"
                  checked={metodo === 'boleto'}
                  onChange={(e) => setMetodo(e.target.value)}
                />
                🧾 Boleto
              </label>
            </div>
          </div>

          {/* BOTÃO FINALIZAR */}
          {objetos.length === 0 ? (
            <button 
              className="btn-finalizar"
              style={{ opacity: 0.5, cursor: 'not-allowed' }}
              onClick={() => alert("Adicione um produto ao carrinho antes de finalizar a compra.")}
            >
              Finalizar Compra
            </button>
          ) : (
            <Link to={'/Confirmação'}>
              <button className="btn-finalizar">Finalizar Compra</button>
            </Link>
          )}
        </div>
      </div>

      <div id="separar"></div>
      <Footer />
    </>
  );
}

export default Carrinho;
