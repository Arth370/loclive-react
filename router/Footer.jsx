import React from 'react'
import Logo from '../imgs/logo.png'
import x from '../imgs/X.png'
import zap from '../imgs/zap.png'
import insta from '../imgs/insta.png'
import face from '../imgs/face.png'
import Vector from '../imgs/Vector.png'  

function Footer() {
  return (
    <footer id="footer">

      {/* TOPO DO FOOTER */}
      <div id="top-footer">
        <img src={Logo} alt="Logo" className="logo-footer" />

        <a href="#topo" className="voltar-topo">
          <p>Voltar ao topo</p>
          <img src={Vector} alt="Seta" className="seta-topo" />
        </a>
      </div>

      {/* MEIO DO FOOTER */}
      <div id="mid-footer">
        
        {/* Mapa do site */}
        <div className="mapa-site">
          <p className="titulo">Mapa do Site:</p>
          <p>Produtos</p>
          <p>Quem Somos</p>
          <p>Termo de Uso</p>
          <p>Central de Ajuda</p>
          <p>Contato</p>
        </div>

        {/* Contato */}
        <div className="contato">
          <p className="titulo">Contato:</p>
          <div className="contatoBox">XX XXXX-XXXX</div>
          <div className="contatoBox">contato@loclive.com</div>
        </div>

        {/* Redes sociais */}
        <div className="redes">
          <p className="titulo">Siga-nos:</p>
          <div className="icons-footer">
            <img src={face} alt="Facebook" />
            <img src={insta} alt="Instagram" />
            <img src={zap} alt="Whatsapp" />
            <img src={x} alt="X" />
          </div>
        </div>
        
      </div>

      {/* Direitos */}
      <div id="direitos">
        <p>LocLive - Todos os direitos reservados 2025</p>
      </div>

    </footer>
  )
}

export default Footer;
