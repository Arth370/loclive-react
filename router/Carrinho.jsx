import React, { useState } from 'react';
import './Carrinho.css';
import Cabecario from './Cabecario';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Carrinho() {

  // Carrinho começa vazio
  const [itens, setItens] = useState([]);

  const [metodo, setMetodo] = useState('cartao');

  const aumentarQtd = (id) => {
    setItens(itens.map(item => 
      item.id === id ? { ...item, qtd: item.qtd + 1 } : item
    ));
  };

  const diminuirQtd = (id) => {
    setItens(itens.map(item => 
      item.id === id && item.qtd > 1 ? { ...item, qtd: item.qtd - 1 } : item
    ));
  };

  const total = itens.reduce((acc, item) => acc + item.preco * item.qtd, 0);

  return (
    <>
      <Cabecario />
      <div id="separar"></div>

      <div className="carrinho-fundo">
        <div className="carrinho-conteudo">
          <h1 className="titulo-carrinho">🛒 Seu Carrinho</h1>

          {/* MENSAGEM QUANDO ESTIVER VAZIO */}
          {itens.length === 0 && (
            <p style={{ textAlign: 'center', color: '#ffb703', marginBottom: '20px' }}>
              Seu carrinho está vazio no momento.
            </p>
          )}

          {/* LISTAGEM DINÂMICA */}
          {itens.map(item => (
            <div className="item-carrinho" key={item.id}>
              <div className="item-info">
                <h2>{item.nome}</h2>
                <p>R$ {item.preco.toFixed(2)}</p>
              </div>
              <div className="controle-qtd">
                <button onClick={() => diminuirQtd(item.id)}>-</button>
                <span>{item.qtd}</span>
                <button onClick={() => aumentarQtd(item.id)}>+</button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <h2 className="total">Total: R$ {total.toFixed(2)}</h2>

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
          {itens.length === 0 ? (
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
