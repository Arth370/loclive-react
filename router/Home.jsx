import React from 'react'
import './index.css'

import Pc from '../imgs/usando-pc.png'
import product from '../imgs/ultimaGeracao.png'
import promo from '../imgs/promocoes.png'
import atendimento from '../imgs/Atendimento.png'
 
import star from '../imgs/Star.png'
import chat from '../imgs/Chat.png'
import basket from '../imgs/Basket.png'


import { Link } from 'react-router-dom'
import Cabecario from './Cabecario'
import Footer from './Footer'

function Home() {
  return (
    <>
    <Cabecario/>
    <div id='separar'></div>
    <main>
      <section id='secao-1'>
        <div id='left-side'>
          <h1>Locação e entregas<br/>de aparelhos<br/>eletrônicos</h1>
          <div id='separacao-pequena'></div>
          <p className='text-secao1'>Deseja adquirir <span style={{color:'#FFB70E'}}>produtos eletrônicos</span> mas não sabe<br/>o melhor lugar para encontrá-los?  A <span  style={{color:'#FFB70E'}}>LocLive</span> te ajuda<br/>à encontrar o <span style={{color:'#FFB70E'}}>produto</span> adequado e dentro de<br/>seu orçamento escolhido.</p>
          <button id='SaibaMais'>Saiba Mais</button>
        </div>
        <div>
          <img src={Pc} alt="Pc" className='imagem-pc' />
        </div>
      </section>
       <section id='secao-2'>
        <div id='text-secao2'>
          <h1>O Que Você Encontra Aqui?</h1>
        </div>
        <div id='bottom-secao2'>
          <img src={product} alt="produto" className='img-secao2' />
          <img src={promo} alt="promo" className='img-secao2' />
          <img src={atendimento} alt="atendimento" className='img-secao2' />
        </div>
       </section>
       <section id='secao-3'>
        <div className='icons-secao3'>
          <img src={star} alt="" />
          <h1>100% de Satisfação</h1>
        </div>
        <div className='icons-secao3'>
          <img src={chat} alt="" />
          <h1>Canal Especializado<br/>Para Clientes</h1>
        </div>
        <div className='icons-secao3'>
          <img src={basket} alt="" />
          <h1>Produtos de Qualidade</h1>
        </div>
       </section>
    </main>
    <div id='separar'></div>
    <Footer/>
    </>
    
  )
}

export default Home