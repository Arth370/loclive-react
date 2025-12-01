import React from 'react';
import Cabecario from './Cabecario';
import Footer from './Footer';
import './Perfil.css';
import { Link } from 'react-router-dom';

function Perfil() {
  const user = {
    nome: "Nome do Usuário",
    email: "email@exemplo.com",
    criada: "01/12/2025",
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
              <p><strong>Conta criada:</strong> {user.criada}</p>
              <p><strong>Status:</strong> {user.status}</p>
              <p><strong>Nível da Conta:</strong> {user.nivel}</p>
            </div>

            {/* BOTÃO PARA PRODUTOS ALUGADOS */}
            <Link to="/ProdutosAlugados">
              <button className="btn-alugados">Produtos Alugados</button>
            </Link>

            <button className="btn-sair">Sair da Conta</button>

          </div>

        </div>

      </div>

      <div id="separar"></div>
      <Footer />
    </>
  );
}

export default Perfil;
