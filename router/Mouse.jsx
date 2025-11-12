import React, { useState } from 'react';
import './produtos.css';
import Filter from '../imgs/Filter.png';
import Search from '../imgs/search.png';
import MouseDell1 from '../imgs/Mouse Dell 1.png';
import MouseDell2 from '../imgs/Mouse Dell 2.png';
import MouseDell3 from '../imgs/Mouse Dell 3.png';
import MouseHP1 from '../imgs/Mouse HP 1.png';
import MouseHP2 from '../imgs/Mouse HP 2.png';
import MouseHP3 from '../imgs/Mouse HP 3.png';
import MouseLenovo1 from '../imgs/Mouse Lenovo 1.png';
import MouseLenovo2 from '../imgs/Mouse Lenovo 2.png';
import MouseLenovo3 from '../imgs/Mouse Lenovo 3.png';
import Cabecario from './Cabecario';
import Footer from './Footer';

function Mouse() {
  const [ativo, setAtivo] = useState('Monitor');
  const botoes = ['Monitor', 'Teclado', 'Mouse', 'Gabinete completo', 'Pc completo'];

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
            {botoes.map((nome) => (
              <button
                key={nome}
                className={`botao ${ativo === nome ? 'ativo' : ''}`}
                onClick={() => setAtivo(nome)}
              >
                {nome}
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
              <img src={MouseDell1} alt="Mouse Dell 1" />
              <div className="card-info">
                <p>Mouse Dell MS116 Preto</p>
                <span className="preco">R$ 66,00</span>
              </div>
            </div>

            <div className="card">
              <img src={MouseDell2} alt="Mouse Dell 2" />
              <div className="card-info">
                <p>Mouse Dell - WM 118</p>
                <span className="preco">R$ 75,00</span>
              </div>
            </div>

            <div className="card">
              <img src={MouseDell3} alt="Mouse Dell 3" />
              <div className="card-info">
                <p>Mouse Dell Pro Plus - MS5320W</p>
                <span className="preco">R$ 299,00</span>
              </div>
            </div>
          </div>

          {/* --- HP --- */}
          <h2 className="marca-titulo">HP:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={MouseHP1} alt="Mouse HP 1" />
              <div className="card-info">
                <p>Mouse HP USB 100 Preto - Sensor Óptico</p>
                <span className="preco">R$ 28,61</span>
              </div>
            </div>

            <div className="card">
              <img src={MouseHP2} alt="Mouse HP 2" />
              <div className="card-info">
                <p>Mouse Sem Fio HP 200 Oman</p>
                <span className="preco">R$ 59,00</span>
              </div>
            </div>

            <div className="card">
              <img src={MouseHP3} alt="Mouse HP 3" />
              <div className="card-info">
                <p>Mouse Sem fio 240, Bluetooth, Branco</p>
                <span className="preco">R$ 85,40</span>
              </div>
            </div>
          </div>

          {/* --- LENOVO --- */}
          <h2 className="marca-titulo">LENOVO:</h2>
          <div className="produtos-grid">
            <div className="card">
              <img src={MouseLenovo1} alt="Mouse Lenovo 1" />
              <div className="card-info">
                <p>Mouse Essential Usb Lenovo</p>
                <span className="preco">R$ 43,99</span>
              </div>
            </div>

            <div className="card">
              <img src={MouseLenovo2} alt="Mouse Lenovo 2" />
              <div className="card-info">
                <p>Mouse Sem Fio Lenovo 300 Compact</p>
                <span className="preco">R$ 47,40</span>
              </div>
            </div>

            <div className="card">
              <img src={MouseLenovo3} alt="Mouse Lenovo 3" />
              <div className="card-info">
                <p>Mouse Bluetooth Lenovo WI 310</p>
                <span className="preco">R$ 90,00</span>
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

export default Mouse;
