import React from 'react'
import Logo from '../imgs/logo.png'
import People from '../imgs/people.png'
import Carrinho from '../imgs/carrinho.png'
import { Link } from 'react-router-dom'
const nome = localStorage.getItem('nome')

function Cabecario() {
  return (
    <>
      <header>
        <div id='topo'>
          <img src={Logo} alt="Logo" />
        </div>

        <nav id='Paginas'>
          <Link className='link' to={'/'}><p>Início</p></Link>
          <Link className='link' to={'/sobre'}><p>Sobre</p></Link>
          <Link className='link' to={'/produtos'}><p>Produtos</p></Link>
        </nav>

        <section id='carrinho'>
          <Link to="/carrinho">
            <button id='botao-carrinho'>
              <img src={Carrinho} alt="Carrinho" />
              Carrinho
            </button>
          </Link>
        </section>

        <section id='cadastro'>
          {localStorage.getItem('nome')?
            <>
            <>
              <img src={People} alt="People" />
              <p className='cadastro-link'>{nome}</p>
            </>
            </>:
            <>
            <img src={People} alt="People" />
            <Link className='cadastro-link' to={'/cadastro'}>
            <p>Cadastre-se</p>
            </Link>
            </>}
        </section>
      </header>
    </>
  )
}

export default Cabecario;
