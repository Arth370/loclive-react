import React, { useState } from 'react';
import './produtos.css';
import { useNavigate } from "react-router-dom"; 
import Filter from '../imgs/Filter.png';
import Search from '../imgs/search.png';
import MonitorDell1 from '../imgs/Monitor Dell 1.png';
import MonitorDell2 from '../imgs/Monitor Dell 2.png';
import MonitorDell3 from '../imgs/Monitor Dell 3.png';
import MonitorHP1 from '../imgs/Monitor HP 1.png';
import MonitorHP2 from '../imgs/Monitor HP 2.png';
import MonitorHP3 from '../imgs/Monitor HP 3.png';
import MonitorLenovo1 from '../imgs/Monitor Lenovo 1.png';
import MonitorLenovo2 from '../imgs/Monitor Lenovo 2.png';
import MonitorLenovo3 from '../imgs/Monitor Lenovo 3.png';
import Cabecario from './Cabecario';
import Footer from './Footer';

function Monitor() {

  const navigate = useNavigate();

  const [ativo, setAtivo] = useState('Monitor');
  


  const botoes = [
    { nome: 'Monitor', rota: '/produtos/monitores' },
    { nome: 'Teclado', rota: '/produtos/teclado' },
    { nome: 'Mouse', rota: '/produtos/mouse' },
    { nome: 'Gabinete completo', rota: '/produtos/gabinete' },
    { nome: 'Pc completo', rota: '/produtos/computadores' }
  ];
  function listarLocalStorage() {
    console.log("--- Itens no LocalStorage ---");
    
    // Loop de 0 até o número total de itens armazenados
    for (let i = 0; i < localStorage.length; i++) {
        // Obtém o nome da chave pelo índice
        const chave = localStorage.key(i);
        
        // Obtém o valor associado a essa chave
        const valor = localStorage.getItem(chave);
        
        console.log(`Chave: "${chave}" | Valor: "${valor}"`);
    }
    
    console.log("----------------------------");
}
listarLocalStorage()
    function abrirPopUp(a) {
      const meuPopUp = document.getElementById('meuPopUp');
      const Nome = document.getElementById('produto-nome');
      const Imagem = document.getElementById('imagem');
      const Preco = document.getElementById('preco');
      const botao = document.getElementById('botoras');




      const div = document.getElementById(a);
      function teste(a,b,c){
        localStorage.setItem(`${a} imagem`,a)
        localStorage.setItem(`${b} Nome`,b)
        localStorage.setItem(`${a} Preco`,c)
      }
      console.log(meuPopUp)
      Imagem.src=div.firstElementChild.src
      Nome.textContent=div.lastElementChild.firstElementChild.textContent
      Preco.textContent=div.lastElementChild.lastElementChild.textContent
      
      meuPopUp.classList.add('modal-overlay')
      // Opcional: Impede o scroll da página principal enquanto o modal está aberto
      botao.addEventListener('click', (a,b,c)=> {
        teste(div.firstElementChild.src,div.lastElementChild.firstElementChild.textContent,div.lastElementChild.lastElementChild.textContent)
      });

  }

  // Função chamada pelo botão de fechar (×) para fechar o pop-up
  function fecharPopUp() {
    const meuPopUp = document.getElementById('meuPopUp');
    console.log(meuPopUp)
      meuPopUp.classList.remove('modal-overlay')
      // Opcional: Restaura o scroll da página principal
  }


  // Opcional: Permite fechar o modal clicando na área escura fora do conteúdo

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
        <div className="produtos-container" >

          {/* --- DELL --- */}
          <h2 className="marca-titulo">DELL:</h2>
          <div className="produtos-grid">
            <div className="card" id='MonitorDell1' onClick={() => abrirPopUp('MonitorDell1')} >
              <img src={MonitorDell1} alt="Monitor Dell 1" />
              <div className="card-info" >
                <p>Monitor Dell UltraSharp de 43 4K com Hub USB-C — U4323QE</p>
                <span className="preco">R$ 2.500,00</span>
              </div>
              
            </div>

            <div className="card" id='MonitorDell2' onClick={() => abrirPopUp('MonitorDell2')}>
              <img src={MonitorDell2} alt="Monitor Dell 2" />
              <div className="card-info" >
                <p>Monitor para videoconferência Dell Pro 34 Plus - P3424WEB</p>
                <span className="preco">R$ 1.532,75</span>
              </div>
            </div>

            <div className="card" id='MonitorDell3' onClick={() => abrirPopUp('MonitorDell3')}>
              <img src={MonitorDell3} alt="Monitor Dell 3" />
              <div className="card-info">
                <p>Monitor Curvo Ultrasharp de 49 com hub USB-C Dell – U4924DW</p>
                <span className="preco">R$ 3.405,75</span>
              </div>
            </div>
          </div>

          {/* --- HP --- */}
          <h2 className="marca-titulo">HP:</h2>
          <div className="produtos-grid">
            <div className="card" id='MonitorHP1' onClick={() => abrirPopUp('MonitorHP1')}>
              <img src={MonitorHP1} alt="HP V22b" />
              <div className="card-info">
                <p>Monitor Hp V22b 21,5 Full Hd Hdmi Dp Ajuste Altura Mostruário Preto</p>
                <span className="preco">R$ 645,89</span>
              </div>
            </div>

            <div className="card" id='MonitorHP2' onClick={() => abrirPopUp('MonitorHP2')}>
              <img src={MonitorHP2} alt="HP E24 G5" />
              <div className="card-info">
                <p>Monitor HP E24 G5 24” Full HD</p>
                <span className="preco">R$ 967,00</span>
              </div>
            </div>

            <div className="card" id='MonitorHP3' onClick={() => abrirPopUp('MonitorHP3')}>
              <img src={MonitorHP3} alt="HP V22i" />
              <div className="card-info">
                <p>Monitor Hp Profissional V22b 21,5 Hdmi Vga Dp Full</p>
                <span className="preco">R$ 599,00</span>
              </div>
            </div>
          </div>

          {/* --- LENOVO --- */}
          <h2 className="marca-titulo">LENOVO:</h2>
          <div className="produtos-grid">
            <div className="card" id='MonitorLenovo1' onClick={() => abrirPopUp('MonitorLenovo1')}>
              <img src={MonitorLenovo1} alt="Lenovo 1" />
              <div className="card-info">
                <p>Monitor Lenovo TC tiny in one 21.5" Gen 3</p>
                <span className="preco">R$ 949,99</span>
              </div>
            </div>

            <div className="card" id='MonitorLenovo2' onClick={() => abrirPopUp('MonitorLenovo2')}>
              <img src={MonitorLenovo2} alt="Lenovo 2" />
              <div className="card-info">
                <p>Monitor Lenovo 23.8” LED Wide Full HD</p>
                <span className="preco">R$ 930,99</span>
              </div>
            </div>

            <div className="card" id='MonitorLenovo3' onClick={() => abrirPopUp('MonitorLenovo3')}>
              <img src={MonitorLenovo3} alt="Lenovo 3" />
              <div className="card-info">
                <p>Monitor Lenovo Thinkvision T22i-30 21.5"63b0mar1br</p>
                <span className="preco">R$ 956,13</span>
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
            <button id='botoras'> fodaseAdicionar ao Carrinho</button>
        </div>
        </div>
      </div>

      <div id="separar"></div>
      <Footer />
    </>
  );
}

export default Monitor;
