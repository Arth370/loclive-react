import React from 'react'
import '../router/Login.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <>
            <div class="FundoLogin">
                <div class="CentroL">
                    <h1>Logar-se</h1>
                </div>
                <div class="EmailL">
                    <h2>Email<span>*</span></h2>
                    <input class="Input" type="text" />
                </div>
                <div class="SenhaL">
                    <h2>Senha<span>*</span></h2>
                    <input class="Input" type="text" />
                </div>
                <div class="ConcordoL">
                    <input type="checkbox" />
                    <h4>Eu concordo em receber conteúdo promocional relacionado<br></br> com os produtos e serviços da LocLive</h4>
                </div>
                <div class="CentroL">
                    <button id="botaoL"><h2>Entrar</h2></button>
                    <div id="perguntaL">
                        <h4>Não tem cadastro?</h4>
                        <Link class="linkL" to={'/cadastro'}><h4 class="EntrarL">Cadastrar</h4></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
