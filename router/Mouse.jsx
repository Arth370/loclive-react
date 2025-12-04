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
import { useNavigate } from "react-router-dom"; 

function Mouse() {

  const navigate = useNavigate();

  const [ativo, setAtivo] = useState('Mouse');

  const botoes = [
    { nome: 'Monitor', rota: '/produtos/monitores' },
    { nome: 'Teclado', rota: '/produtos/teclado' },
    { nome: 'Mouse', rota: '/produtos/mouse' },
    { nome: 'Gabinete completo', rota: '/produtos/gabinete' },
    { nome: 'Pc completo', rota: '/produtos/computadores' }
  ];
      function abrirPopUp(a) {
      const meuPopUp = document.getElementById('meuPopUp');
      const Nome = document.getElementById('produto-nome');
      const Imagem = document.getElementById('imagem');
      const Preco = document.getElementById('preco');
      const botao = document.getElementById('botoras');




      const div = document.getElementById(a);
      const testando = a
      function teste(a,b,c,d){
        if(localStorage.getItem(`${d}`)){
          let valor = JSON.parse(localStorage.getItem(`${d}`))
          valor.qnt++
          console.log(valor.qnt)
          localStorage.setItem(`${d}`,JSON.stringify(valor))
          alert('item adicionado ao carrinho')

          
        }else{
          let obj = {imagem:a,produto:b,preco:c, qnt:1}
          localStorage.setItem(`${d}`,JSON.stringify(obj))
          alert('item adicionado ao carrinho')
        }

      }
      console.log(meuPopUp)
      Imagem.src=div.firstElementChild.src
      Nome.textContent=div.lastElementChild.firstElementChild.textContent
      Preco.textContent=` R$ ${div.lastElementChild.lastElementChild.textContent}`
      
      meuPopUp.classList.add('modal-overlay')
      // Opcional: Impede o scroll da página principal enquanto o modal está aberto
      botao.addEventListener('click', (a,b,c,d)=> {
        teste(div.firstElementChild.src,div.lastElementChild.firstElementChild.textContent,parseFloat(div.lastElementChild.lastElementChild.textContent.replace(',', '.')),testando)
      });

  }

  // Função chamada pelo botão de fechar (×) para fechar o pop-up
  function fecharPopUp() {
    const meuPopUp = document.getElementById('meuPopUp');
    console.log(meuPopUp)
      meuPopUp.classList.remove('modal-overlay')
      // Opcional: Restaura o scroll da página principal
  }

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
            <div className="card" id='MouseDell1' onClick={()=>abrirPopUp('MouseDell1')}>
              <img src={MouseDell1} alt="Mouse Dell 1" />
              <div className="card-info">
                <p>Mouse Dell MS116 Preto</p>
                <span className="preco">66,00</span>
              </div>
            </div>

            <div className="card" id='MouseDell2' onClick={()=>abrirPopUp('MouseDell2')}>
              <img src={MouseDell2} alt="Mouse Dell 2" />
              <div className="card-info">
                <p>Mouse Dell - WM 118</p>
                <span className="preco">75,00</span>
              </div>
            </div>

            <div className="card" id='MouseDell3' onClick={()=>abrirPopUp('MouseDell3')}>
              <img src={MouseDell3} alt="Mouse Dell 3" />
              <div className="card-info">
                <p>Mouse Dell Pro Plus - MS5320W</p>
                <span className="preco">299,00</span>
              </div>
            </div>
          </div>

          {/* --- HP --- */}
          <h2 className="marca-titulo">HP:</h2>
          <div className="produtos-grid">
            <div className="card" id='MouseHP1' onClick={()=>abrirPopUp('MouseHP1')}>
              <img src={MouseHP1} alt="Mouse HP 1" />
              <div className="card-info">
                <p>Mouse HP USB 100 Preto - Sensor Óptico</p>
                <span className="preco">28,61</span>
              </div>
            </div>

            <div className="card" id='MouseHP2' onClick={()=>abrirPopUp('MouseHP2')}>
              <img src={MouseHP2} alt="Mouse HP 2" />
              <div className="card-info">
                <p>Mouse Sem Fio HP 200 Oman</p>
                <span className="preco">59,00</span>
              </div>
            </div>

            <div className="card" id='MouseHP3' onClick={()=>abrirPopUp('MouseHP3')}>
              <img src={MouseHP3} alt="Mouse HP 3" />
              <div className="card-info">
                <p>Mouse Sem fio 240, Bluetooth, Branco</p>
                <span className="preco">85,40</span>
              </div>
            </div>
          </div>

          {/* --- LENOVO --- */}
          <h2 className="marca-titulo">LENOVO:</h2>
          <div className="produtos-grid">
            <div className="card" id='MouseLenovo1' onClick={()=>abrirPopUp('MouseLenovo1')}>
              <img src={MouseLenovo1} alt="Mouse Lenovo 1" />
              <div className="card-info">
                <p>Mouse Essential Usb Lenovo</p>
                <span className="preco">43,99</span>
              </div>
            </div>

            <div className="card" id='MouseLenovo2' onClick={()=>abrirPopUp('MouseLenovo2')}>
              <img src={MouseLenovo2} alt="Mouse Lenovo 2" />
              <div className="card-info">
                <p>Mouse Sem Fio Lenovo 300 Compact</p>
                <span className="preco">47,40</span>
              </div>
            </div>

            <div className="card" id='MouseLenovo3' onClick={()=>abrirPopUp('MouseLenovo3')}>
              <img src={MouseLenovo3} alt="Mouse Lenovo 3" />
              <div className="card-info">
                <p>Mouse Bluetooth Lenovo WI 310</p>
                <span className="preco">90,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div id='meuPopUp' class="none">
        <div class="modal-conteudo">

            <span class="fechar-btn" onClick={fecharPopUp}>&times;</span>
            
            <h2 id='produto-nome'>Bem-vindo ao Pop-up Fullscreen!</h2>
            <img id='imagem' src='' alt="" />
            <p id='preco'></p>
            <button id='botoras'>Adicionar ao Carrinho</button>
        </div>
        </div>
      <div id="separar"></div>
      <Footer />
    </>
  );
}

export default Mouse;
