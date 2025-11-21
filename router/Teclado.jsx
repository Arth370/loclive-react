import React, { useState } from 'react';
import './produtos.css';
import Filter from '../imgs/Filter.png';
import Search from '../imgs/search.png';
import TecladoDell1 from '../imgs/Teclado Dell 1.png';
import TecladoDell2 from '../imgs/Teclado Dell 2.png';
import TecladoDell3 from '../imgs/Teclado Dell 3.png';
import TecladoHP1 from '../imgs/Teclado HP 1.png';
import TecladoHP2 from '../imgs/Teclado HP 2.png';
import TecladoHP3 from '../imgs/Teclado HP 3.png';
import TecladoLenovo1 from '../imgs/Teclado Lenovo 1.png';
import TecladoLenovo2 from '../imgs/Teclado Lenovo 2.png';
import TecladoLenovo3 from '../imgs/Teclado Lenovo 3.png';
import Cabecario from './Cabecario';
import Footer from './Footer';
import { useNavigate } from "react-router-dom"; 

function Teclado() {

  const navigate = useNavigate();

  const [ativo, setAtivo] = useState('Teclado');

  const botoes = [
    { nome: 'Monitor', rota: '/produtos/monitores' },
    { nome: 'Teclado', rota: '/produtos/teclado' },
    { nome: 'Mouse', rota: '/produtos/mouse' },
    { nome: 'Gabinete completo', rota: '/produtos/gabinete' },
    { nome: 'Pc completo', rota: '/produtos/computadores' }
  ];

  return (
    <>
      <Cabecario />
      <div id="separar"></div>

      <div className="produtos">
        {/* --- BUSCA --- */}
        <div className="busca">
          <img src={Search} alt="Buscar" className="icon" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="campo-busca"
          />
        </div>

        {/* --- FILTROS --- */}
        <div className="filtros">
          <img src={Filter} alt="Filtro" className="icon" />
          <div className="botoes">
            {botoes.map((btn) => (
              <button
                key={btn.nome}
                className={`botao ${ativo === btn.nome ? 'ativo' : ''}`}
                onClick={() => {
                  setAtivo(btn.nome);
                  navigate(btn.rota);   // ⬅ NAVEGAÇÃO FUNCIONANDO
                }}
              >
                {btn.nome}
              </button>
            ))}
          </div>
        </div>

        {/* --- CARDS DE PRODUTOS --- */}
        <div className="produtos-container">

          {/* --- DELL --- */}
          <h2 className="marca-titulo">DELL:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={TecladoDell1} alt="Teclado Dell 1" />
              <div className="card-info">
                <p>Dell Premier Collaboration Keyboard (KB 900)</p>
                <span className="preco">R$ 109,00</span>
              </div>
            </div>

            <div className="card">
              <img src={TecladoDell2} alt="Teclado Dell 2" />
              <div className="card-info">
                <p>Teclado com smart card Dell Pro - KB813</p>
                <span className="preco">R$ 149,00</span>
              </div>
            </div>

            <div className="card">
              <img src={TecladoDell3} alt="Teclado Dell 3" />
              <div className="card-info">
                <p>Teclado Multimídia Dell KB 216</p>
                <span className="preco">R$ 99,00</span>
              </div>
            </div>
          </div>

          {/* --- HP --- */}
          <h2 className="marca-titulo">HP:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={TecladoHP1} alt="Teclado HP 1" />
              <div className="card-info">
                <p>Teclado sem Fio HP 230 - com Dongle USB Wireless, Layout BR, Preto</p>
                <span className="preco">R$ 108,15</span>
              </div>
            </div>

            <div className="card">
              <img src={TecladoHP2} alt="Teclado HP 2" />
              <div className="card-info">
                <p>Teclado reforçado Hewlett Packard (HP) Business Black USB Slim </p>
                <span className="preco">R$ 151,43</span>
              </div>
            </div>

            <div className="card">
              <img src={TecladoHP3} alt="Teclado HP 3" />
              <div className="card-info">
                <p>Teclado convencional HP USB Preto Padrão ABNT2 </p>
                <span className="preco">R$ 124,90</span>
              </div>
            </div>
          </div>

          {/* --- LENOVO --- */}
          <h2 className="marca-titulo">LENOVO:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={TecladoLenovo1} alt="Teclado Lenovo 1" />
              <div className="card-info">
                <p>Teclado Lenovo Preferred Pro li Ubs - 4y41r90027 Preto</p>
                <span className="preco">R$ 58,20</span>
              </div>
            </div>

            <div className="card">
              <img src={TecladoLenovo2} alt="Teclado Lenovo 2" />
              <div className="card-info">
                <p>Teclado Para Notebook Lenovo G Series G400s | Preto Abnt2</p>
                <span className="preco">R$ 61,90</span>
              </div>
            </div>

            <div className="card">
              <img src={TecladoLenovo3} alt="Teclado Lenovo 3" />
              <div className="card-info">
                <p>Teclado Lenovo sem fio – para PC, laptop com Windows – Conexão sem fio – preto</p>
                <span className="preco">R$ 94.95</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="separar"></div>
      <Footer />
    </>
  );
}

export default Teclado;
