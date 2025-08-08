import React from 'react'
import Logo from '../imgs/logo.png'
import x from '../imgs/X.png'
import zap from '../imgs/zap.png'
import insta from '../imgs/insta.png'
import face from '../imgs/face.png'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
    <footer>
        <div id='top-footer'>
            <img src={Logo} alt="Logo" />
            <a href="#topo" className='link'><p>Voltar Ao Topo</p></a>
        </div>
        <div id='mid-footer'>
            <div>
                <p>Produtos</p>
                <p>Sobre</p>
                <p>Contato</p>
                <p>Termos de Uso</p>
            </div>
            <div id='contato'>
                <p>Contato:</p>
                <div className='contatoBox'>XX XXXX-XXXX</div>
                <div className='contatoBox'>contato@loclive.com</div>
            </div>
            <div>
                <p>Siga-nos</p>
                <div id='icons-footer'>
                    <img src={x} alt="X" />
                    <img src={zap} alt="zap" />
                    <img src={insta} alt="insta" />
                    <img src={face} alt="face" />
                </div>
            </div>
        </div>
        <div id='direitos'>
            <p>LocLive - Todos os direitos reservados 2025 </p>
        </div>
    </footer>
    </>
  )
}

export default Footer