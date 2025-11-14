import React from 'react';
import Cabecario from './Cabecario';
import Footer from './Footer';
import empresa from '../imgs/empresa.png';
import QuemSomos from '../imgs/QuemSomos.png';
import NossaVisão from "../imgs/NossaVisão.png";
import NossaMissão from '../imgs/NossaMissão.png';
import ProdutosSobre from '../imgs/Produtos-Sobre.png';


function Sobre() {
  return (
    <>
      <Cabecario/>
      <div id='separar'></div>

      <main>

        {/* ===== SEÇÃO SOBRE ===== */}
        <section id='secao1-sobre'>
          <div>
            <div id='text-secao1-sobre'>
              <h1>Sobre a Empresa:</h1>
              <p>
                A LocLive é uma empresa especializada em locação e gestão de<br/>
                equipamentos de informática, criada com o objetivo de resolver os principais<br/>
                desafios enfrentados por empresas e usuários na administração de produtos<br/>
                tecnológicos locados.<br/><br/>

                Percebemos que a falta de um sistema centralizado e eficiente tem gerado<br/>
                problemas recorrentes no setor: atrasos, extravios, falhas na manutenção e,<br/>
                principalmente, uma experiência negativa para o cliente. Com isso em<br/>
                mente, a LocLive nasceu com a missão de oferecer uma solução moderna,<br/>
                automatizada e acessível, que organize e otimize todo o processo de locação.<br/><br/>

                Nosso sistema foi desenvolvido para proporcionar mais controle, segurança e<br/>
                praticidade, tanto para os gestores quanto para os clientes. Através da nossa<br/>
                plataforma, é possível acompanhar o status dos equipamentos em tempo<br/>
                real, garantir entregas mais ágeis e seguras, e reduzir significativamente os<br/>
                riscos de perdas ou extravios.<br/><br/>

                Mais do que uma empresa de locação, a LocLive é uma parceira estratégica<br/>
                que valoriza a eficiência, a transparência e a satisfação do usuário.<br/>
                Trabalhamos diariamente para melhorar a experiência dos nossos clientes,<br/>
                oferecendo uma navegação simples, informações claras e atendimento ágil.<br/>
                Nossa meta é tornar a tecnologia mais acessível, com processos organizados<br/>
                e resultados concretos.<br/><br/>

                LocLive — Conectando empresas à tecnologia com eficiência, confiança e<br/>
                inovação.
              </p>
            </div>
          </div>

          <div>
            <img src={empresa} alt="foto empresa" className='Foto-Empresa-Sobre' />
          </div>
        </section>

        <div id='separar'></div>

        {/* ===== SEÇÃO PRODUTOS ===== */}
        <section id="secao-produtos">
          <div id="text-secao-produtos">
            <h1>Produtos:</h1>
            <p>
              Na aba de Produtos da LocLive, você encontra uma linha completa de equipamentos de informática disponíveis para locação, pensada para atender empresas de todos os portes e segmentos. Oferecemos computadores,  monitores, periféricos e entre outras soluções para eventos corporativos, com configurações variadas e atualizadas.
              <br/><br/>
              Cada item vem com informações detalhadas e pode ser acompanhado em tempo real pela nossa plataforma, garantindo controle total, segurança e agilidade. Além disso, oferecemos suporte técnico e gestão automatizada para que sua empresa tenha uma experiência tranquila e eficiente.
              <br/><br/>
              Com a LocLive, você não apenas aluga tecnologia — você investe em produtividade, inovação e tranquilidade.
            </p>
          </div>

          <div>
            <img src={ProdutosSobre} alt="foto Produtos-Sobre" className='Foto-Produtos-Sobre' />
          </div>

        </section>

        <div id='separar'></div>

        {/* ===== SEÇÃO QUEM SOMOS ===== */}
        <section id='secao2-sobre'>
          <img src={QuemSomos} alt="" />
          <img src={NossaVisão} alt="" />
          <img src={NossaMissão} alt="" />
        </section>

      </main>

      <div id='separar'></div>

      <Footer/>
    </>
  )
}

export default Sobre;
