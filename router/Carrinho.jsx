import React, { useState } from 'react';
import './Carrinho.css';
import Cabecario from './Cabecario';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Carrinho() {
  const [itens, setItens] = useState([
    { id: 1, nome: 'Monitor Dell 24"', preco: 1299.90, qtd: 1 },
    { id: 2, nome: 'Teclado Mecânico RGB', preco: 399.90, qtd: 1 },
  ]);

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

          <h2 className="total">Total: R$ {total.toFixed(2)}</h2>

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

          <Link to={'/Confirmação'}><button className="btn-finalizar">Finalizar Compra</button></Link>
        </div>
      </div>
      <div id="separar"></div>
      <Footer />
    </>
  );
}

export default Carrinho;
