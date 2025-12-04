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

function abrirPopUp(a) {
      const meuPopUp = document.getElementById('meuPopUp');
      const Nome = document.getElementById('produto-nome');
      const Imagem = document.getElementById('imagem');
      const Preco = document.getElementById('preco');
      const botao = document.getElementById('botoras');




      const div = document.getElementById(a);
      const testando = a
      function teste(a,b,c,d){
        let obj = {imagem:a,produto:b,preco:c, qnt:1}
        localStorage.setItem(`${d}`,JSON.stringify(obj))
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


  // Opcional: Permite fechar o modal clicando na área escura fora do conteúdo




  const navigate = useNavigate();

  const [ativo, setAtivo] = useState('Teclado');

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
            <div className="card" id='TecladoDell1' onClick={()=>abrirPopUp('TecladoDell1')}>
              <img src={TecladoDell1} alt="Teclado Dell 1" />
              <div className="card-info">
                <p>Dell Premier Collaboration Keyboard (KB 900)</p>
                <span className="preco">109,00</span>
              </div>
            </div>

            <div className="card" id='TecladoDell2' onClick={()=>abrirPopUp('TecladoDell2')}>
              <img src={TecladoDell2} alt="Teclado Dell 2" />
              <div className="card-info">
                <p>Teclado com smart card Dell Pro - KB813</p>
                <span className="preco">149,00</span>
              </div>
            </div>

            <div className="card" id='TecladoDell3' onClick={()=>abrirPopUp('TecladoDell3')}>
              <img src={TecladoDell3} alt="Teclado Dell 3" />
              <div className="card-info">
                <p>Teclado Multimídia Dell KB 216</p>
                <span className="preco">99,00</span>
              </div>
            </div>
          </div>

          {/* --- HP --- */}
          <h2 className="marca-titulo">HP:</h2>
          <div className="produtos-grid">
            <div className="card" id='TecladoHP1' onClick={()=>abrirPopUp('TecladoHP1')}>
              <img src={TecladoHP1} alt="Teclado HP 1" />
              <div className="card-info">
                <p>Teclado sem Fio HP 230 - com Dongle USB Wireless, Layout BR, Preto</p>
                <span className="preco">108,15</span>
              </div>
            </div>

            <div className="card" id='TecladoHP2' onClick={()=>abrirPopUp('TecladoHP2')}>
              <img src={TecladoHP2} alt="Teclado HP 2" />
              <div className="card-info">
                <p>Teclado reforçado Hewlett Packard (HP) Business Black USB Slim </p>
                <span className="preco">151,43</span>
              </div>
            </div>

            <div className="card" id='TecladoHP3' onClick={()=>abrirPopUp('TecladoHP3')}>
              <img src={TecladoHP3} alt="Teclado HP 3" />
              <div className="card-info">
                <p>Teclado convencional HP USB Preto Padrão ABNT2 </p>
                <span className="preco">124,90</span>
              </div>
            </div>
          </div>

          {/* --- LENOVO --- */}
          <h2 className="marca-titulo">LENOVO:</h2>
          <div className="produtos-grid">
            <div className="card" id='TecladoLenovo1' onClick={()=>abrirPopUp('TecladoLenovo1')}>
              <img src={TecladoLenovo1} alt="Teclado Lenovo 1" />
              <div className="card-info">
                <p>Teclado Lenovo Preferred Pro li Ubs - 4y41r90027 Preto</p>
                <span className="preco">58,20</span>
              </div>
            </div>

            <div className="card" id='TecladoLenovo2' onClick={()=>abrirPopUp('TecladoLenovo2')}>
              <img src={TecladoLenovo2} alt="Teclado Lenovo 2" />
              <div className="card-info">
                <p>Teclado Para Notebook Lenovo G Series G400s | Preto Abnt2</p>
                <span className="preco">61,90</span>
              </div>
            </div>

            <div className="card" id='TecladoLenovo3' onClick={()=>abrirPopUp('TecladoLenovo3')}>
              <img src={TecladoLenovo3} alt="Teclado Lenovo 3" />
              <div className="card-info">
                <p>Teclado Lenovo sem fio – para PC, laptop com Windows – Conexão sem fio – preto</p>
                <span className="preco">94.95</span>
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

export default Teclado;
