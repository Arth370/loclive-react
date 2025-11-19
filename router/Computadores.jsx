import React, { useState } from 'react';
import './produtos.css';
import Filter from '../imgs/Filter.png';
import Search from '../imgs/search.png';
import ComputadoresDell1 from '../imgs/Computadores Dell 1.png';
import ComputadoresDell2 from '../imgs/Computadores Dell 2.png';
import ComputadoresDell3 from '../imgs/Computadores Dell 3.png';
import ComputadoresHP1 from '../imgs/Computadores HP 1.png';
import ComputadoresHP2 from '../imgs/Computadores HP 2.png';
import ComputadoresHP3 from '../imgs/Computadores HP 3.png';
import ComputadoresLenovo1 from '../imgs/Computadores Lenovo 1.png';
import ComputadoresLenovo2 from '../imgs/Computadores Lenovo 2.png';
import ComputadoresLenovo3 from '../imgs/Computadores Lenovo 3.png';
import Cabecario from './Cabecario';
import Footer from './Footer';
import { useNavigate } from "react-router-dom"; 

function Computadores() {

  const navigate = useNavigate();

  const [ativo, setAtivo] = useState('Monitor');

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
              <img src={ComputadoresDell1} alt="Computadores Dell 1" />
              <div className="card-info">
                <p>Dell 24 All-in-One</p>
                <span className="preco">R$ 1.249,75</span>
              </div>
            </div>

            <div className="card">
              <img src={ComputadoresDell2} alt="Computadores Dell 2" />
              <div className="card-info">
                <p>Cpu Monitor Dell Optiplex Inter Core I5 16gb 1tb Novo 16 Gb</p>
                <span className="preco">R$ 999,00</span>
              </div>
            </div>

            <div className="card">
              <img src={ComputadoresDell3} alt="Computadores Dell 3" />
              <div className="card-info">
                <p>Computador Completo Dell Optiplex 7010 i7 3°G 8GB SSD 120GB Dell E1916HF 19″ Teclado e Mouse Win 10 Pro</p>
                <span className="preco">R$  800,00</span>
              </div>
            </div>
          </div>

          {/* --- HP --- */}
          <h2 className="marca-titulo">HP:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={ComputadoresHP1} alt="Computadores HP 1" />
              <div className="card-info">
                <p>Computador Cpu Hp Inter Core I5 16gb 240 ssd + Monitor 22 pol 16Gb</p>
                <span className="preco">R$ 890,00</span>
              </div>
            </div>

            <div className="card">
              <img src={ComputadoresHP2} alt="Computadores HP 2" />
              <div className="card-info">
                <p>Computador tudo em um HP Elite Studio 8 G1i Ultra 5-235/ 16 GB/ 512 GB 27 </p>
                <span className="preco">R$ 2.172,535</span>
              </div>
            </div>

            <div className="card">
              <img src={ComputadoresHP3} alt="Computadores HP 3" />
              <div className="card-info">
                <p>PC Completo HP ELITEDESK i7 6° 16gb SSD480 Mon19', Tec, Mou </p>
                <span className="preco">R$ 980,00</span>
              </div>
            </div>
          </div>

          {/* --- LENOVO --- */}
          <h2 className="marca-titulo">LENOVO:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={ComputadoresLenovo1} alt="Computadores Lenovo 1" />
              <div className="card-info">
                <p>Cpu Lenovo Mini M70q I5 10g 16gb 1tb Ssd + Monitor 22 +win11</p>
                <span className="preco">R$ 1.068,07</span>
              </div>
            </div>

            <div className="card">
              <img src={ComputadoresLenovo2} alt="Computadores Lenovo 2" />
              <div className="card-info">
                <p>Cpu Monitor Lenovo Intel I5 8 ger 16gb Ssd 1tb Wifi 2.4 5ghz 1000 Gb 16 Gb Intel Hd Graphics 630</p>
                <span className="preco">R$ 1.00,00</span>
              </div>
            </div>

            <div className="card">
              <img src={ComputadoresLenovo3} alt="Computadores Lenovo 3" />
              <div className="card-info">
                <p>Cpu + Monitor Lenovo Mini M93p Intel Core I3 8gb 1tb</p>
                <span className="preco">R$ 999,00</span>
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

export default Computadores;
