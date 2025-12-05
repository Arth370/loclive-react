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

  const [ativo, setAtivo] = useState('Gabinete completo');

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
      function teste(a,b,c,testando){
        console.log(testando  )
        if(!localStorage.getItem(testando)){
          let obj = {imagem:a,produto:b,preco:c, qnt:1}
          localStorage.setItem(`${testando}`,JSON.stringify(obj))
          alert('item adicionado ao carrinho')
        }else{
          let valor = JSON.parse(localStorage.getItem(`${testando}`))
          valor.qnt++
          console.log(valor.qnt)
          localStorage.setItem(`${testando}`,JSON.stringify(valor))
          alert('item adicionado ao carrinho')
        }
      }
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
            <div className="card" id='GabineteDell1' onClick={()=>abrirPopUp('GabineteDell1')}>
              <img src={GabineteDell1} alt="Gabinete Dell 1" />
              <div className="card-info">
                <p>Gabinete  Dell Pro Slim Plus</p>
                <span className="preco">1612,75</span>
              </div>
            </div>

            <div className="card" id='GabineteDell2' onClick={()=>abrirPopUp('GabineteDell2')}>
              <img src={GabineteDell2} alt="Gabinete Dell 2" />
              <div className="card-info">
                <p>Gabinete Dell Pro Max Tower T2</p>
                <span className="preco">1175,25</span>
              </div>
            </div>

            <div className="card" id='GabineteDell3' onClick={()=>abrirPopUp('GabineteDell3')}>
              <img src={GabineteDell3} alt="Gabinete Dell 3" />
              <div className="card-info">
                <p>Gabinete Dell Pro Micro 14a geração</p>
                <span className="preco">1091,25</span>
              </div>
            </div>
          </div>

          {/* --- HP --- */}
          <h2 className="marca-titulo">HP:</h2>
          <div className="produtos-grid">
            <div className="card" id='GabineteHP1' onClick={()=>abrirPopUp('GabineteHP1')}>
              <img src={GabineteHP1} alt="Gabinete HP 1" />
              <div className="card-info">
                <p>Gabinete 280-G5, Intel Core i5, 8GB de Memória, 256gb SSD, Windows 11 Home, 639K3LA, HP</p>
                <span className="preco">938,50</span>
              </div>
            </div>

            <div className="card" id='GabineteHP2' onClick={()=>abrirPopUp('GabineteHP2')}>
              <img src={GabineteHP2} alt="Gabinete HP 2" />
              <div className="card-info">
                <p>TGabinete Hp Prodesk 600 G1 Intel Core i3 16gb SSD 240GB Wifi </p>
                <span className="preco">949,05</span>
              </div>
            </div>

            <div className="card" id='GabineteHP3' onClick={()=>abrirPopUp('GabineteHP3')}>
              <img src={GabineteHP3} alt="Gabinete HP 3" />
              <div className="card-info">
                <p>HP Gabinete Pro A Amd Ryzen 5 2400G </p>
                <span className="preco">960,10</span>
              </div>
            </div>
          </div>

          {/* --- LENOVO --- */}
          <h2 className="marca-titulo">LENOVO:</h2>
          <div className="produtos-grid">
            <div className="card" id='GabineteLenovo1' onClick={()=>abrirPopUp('GabineteLenovo1')}>
              <img src={GabineteLenovo1} alt="Gabinete Lenovo 1" />
              <div className="card-info">
                <p>Gabinete  Lenovo Thinkcentre Neo 50q Gen 4 Business Mff I5</p>
                <span className="preco">1887,5</span>
              </div>
            </div>

            <div className="card" id='GabineteLenovo2' onClick={()=>abrirPopUp('GabineteLenovo2')}>
              <img src={GabineteLenovo2} alt="Gabinete Lenovo 2" />
              <div className="card-info">
                <p>Gabinete Servidor Lenovo Think System Sr950</p>
                <span className="preco">840,00</span>
              </div>
            </div>

            <div className="card" id='GabineteLenovo3' onClick={()=>abrirPopUp('GabineteLenovo3')}>
              <img src={GabineteLenovo3} alt="Gabinete Lenovo 3" />
              <div className="card-info">
                <p>Gabinete Lenovo Thinkcentre M720s M920s Preto</p>
                <span className="preco">920,00</span>
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

export default Gabinete;
