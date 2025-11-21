import React, { useState } from 'react';
import './produtos.css';
import Filter from '../imgs/Filter.png';
import Search from '../imgs/search.png';
import GabineteDell1 from '../imgs/Gabinete Dell 1.png';
import GabineteDell2 from '../imgs/Gabinete Dell 2.png';
import GabineteDell3 from '../imgs/Gabinete Dell 3.png';
import GabineteHP1 from '../imgs/Gabinete HP 1.png';
import GabineteHP2 from '../imgs/Gabinete HP 2.png';
import GabineteHP3 from '../imgs/Gabinete HP 3.png';
import GabineteLenovo1 from '../imgs/Gabinete Lenovo 1.png';
import GabineteLenovo2 from '../imgs/Gabinete Lenovo 2.png';
import GabineteLenovo3 from '../imgs/Gabinete Lenovo 3.png';
import Cabecario from './Cabecario';
import Footer from './Footer';
import { useNavigate } from "react-router-dom"; 

function Gabinete() {

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
              <img src={GabineteDell1} alt="Gabinete Dell 1" />
              <div className="card-info">
                <p>Gabinete  Dell Pro Slim Plus</p>
                <span className="preco">R$ 1.612,75</span>
              </div>
            </div>

            <div className="card">
              <img src={GabineteDell2} alt="Gabinete Dell 2" />
              <div className="card-info">
                <p>Gabinete Dell Pro Max Tower T2</p>
                <span className="preco">R$ 1.175,25</span>
              </div>
            </div>

            <div className="card">
              <img src={GabineteDell3} alt="Gabinete Dell 3" />
              <div className="card-info">
                <p>Gabinete Dell Pro Micro 14a geração</p>
                <span className="preco">R$  1.091,25</span>
              </div>
            </div>
          </div>

          {/* --- HP --- */}
          <h2 className="marca-titulo">HP:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={GabineteHP1} alt="Gabinete HP 1" />
              <div className="card-info">
                <p>Gabinete 280-G5, Intel Core i5, 8GB de Memória, 256gb SSD, Windows 11 Home, 639K3LA, HP</p>
                <span className="preco">R$ 938,50</span>
              </div>
            </div>

            <div className="card">
              <img src={GabineteHP2} alt="Gabinete HP 2" />
              <div className="card-info">
                <p>TGabinete Hp Prodesk 600 G1 Intel Core i3 16gb SSD 240GB Wifi </p>
                <span className="preco">R$ 949,05</span>
              </div>
            </div>

            <div className="card">
              <img src={GabineteHP3} alt="Gabinete HP 3" />
              <div className="card-info">
                <p>HP Gabinete Pro A Amd Ryzen 5 2400G </p>
                <span className="preco">R$ 960,10</span>
              </div>
            </div>
          </div>

          {/* --- LENOVO --- */}
          <h2 className="marca-titulo">LENOVO:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={GabineteLenovo1} alt="Gabinete Lenovo 1" />
              <div className="card-info">
                <p>Gabinete  Lenovo Thinkcentre Neo 50q Gen 4 Business Mff I5</p>
                <span className="preco">R$ 1.887,5</span>
              </div>
            </div>

            <div className="card">
              <img src={GabineteLenovo2} alt="Gabinete Lenovo 2" />
              <div className="card-info">
                <p>Gabinete Servidor Lenovo Think System Sr950</p>
                <span className="preco">R$ 840,00</span>
              </div>
            </div>

            <div className="card">
              <img src={GabineteLenovo3} alt="Gabinete Lenovo 3" />
              <div className="card-info">
                <p>Gabinete Lenovo Thinkcentre M720s M920s Preto</p>
                <span className="preco">R$ 920,00</span>
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

export default Gabinete;
