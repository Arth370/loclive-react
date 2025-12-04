import React from 'react';
import Cabecario from './Cabecario';
import Footer from './Footer';
import './Perfil.css';
import { Link } from 'react-router-dom';


function Perfil() {
  const user = {
    nome: localStorage.getItem('nome'),
    email: localStorage.getItem('email'),
    status: "Ativa",
    nivel: "Padrão",
  };

  return (
    <>
      <Cabecario />
      <div id="separar"></div>

      <div className="perfil-wrapper">

        <div className="perfil-card-horizontal">

          {/* FOTO À ESQUERDA */}
          <div className="perfil-imagem">
            <div className="foto-perfil"></div>
          </div>

          {/* INFORMAÇÕES À DIREITA */}
          <div className="perfil-info-bloco">

            <h1 className="perfil-nome">{user.nome}</h1>
            <p className="perfil-email">{user.email}</p>

            <div className="perfil-info">
              <p><strong>Status:</strong> {user.status}</p>
              <p><strong>Nível da Conta:</strong> {user.nivel}</p>
            </div>

            {/* BOTÃO PARA PRODUTOS ALUGADOS */}
            <Link to="/ProdutosAlugados">
              <button className="btn-alugados">Produtos Alugados</button>
            </Link>

            <Link to={'/'}><button onClick={()=>{localStorage.clear()}} className="btn-sair">Sair da Conta</button></Link>

          </div>

        </div>

      </div>

      <div id="separar"></div>
      <Footer />
    </>
  );
}

export default Perfil;
