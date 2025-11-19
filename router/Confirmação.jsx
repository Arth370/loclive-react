import React from 'react';
import './confirmação.css';
import { Link } from 'react-router-dom';


function Confirmacao() {
  return (
    <div className="confirmacao-container">
      <div className="confirmacao-card">
        <div className="icone-check">✔</div>

        <h1 className="titulo-confirmacao">Pagamento Aprovado!</h1>

        <p className="mensagem-confirmacao">
          Seu pedido foi processado com sucesso.  
          Obrigado por comprar com a gente!
        </p>

        
        <Link to={'/Produtos'}><button className="btn-voltar">Voltar para a Loja</button></Link>
      </div>
    </div>
  );
}

export default Confirmacao;
