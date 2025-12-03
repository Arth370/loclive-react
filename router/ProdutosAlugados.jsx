import React, { useState } from "react";
import Cabecario from "./Cabecario";
import Footer from "./Footer";
import "./ProdutosAlugados.css";
import { Link } from 'react-router-dom';

function ProdutosAlugados() {
  const [filtroSelecionado, setFiltroSelecionado] = useState("todos");

  return (
    <>
      <Cabecario />
      <div id="separar"></div>


      <div className="produtos-alugados">


        <h1 className="titulo">Produtos Alugados</h1>
        <p className="subtitulo">Gerencie seus aluguéis e acompanhe os pagamentos</p>


        {/* === CARDS DE ESTATÍSTICAS === */}
        <div className="linha-cards">
          <div className="card-info">

            <p>Total de Aluguéis</p>
            <h2>0</h2>
            <span>produtos ativos</span>
          </div>

          <div className="card-info">
            <p>Receita Mensal</p>
            <h2>R$ 0,00</h2>
            <span>total previsto</span>
          </div>

          <div className="card-info">
            <p>Pagamentos em Dia</p>
            <h2>0</h2>
            <span>0% do total</span>
          </div>

          <div className="card-info">
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
        <div className="area-vazia">
          <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="nenhum" className="icone-vazio"/>
          <h3>Nenhum produto encontrado</h3>
          <p>Cadastre um produto alugado para começar a gerenciar.</p>
        </div>

      </div>
      <div id="separar"></div>

      <Footer />
    </>
  );
}

export default ProdutosAlugados;
