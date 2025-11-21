import {useEffect, useState} from 'react'
import React from 'react'
import '../router/Login.css'
import { Link } from 'react-router-dom'
import { use } from 'react'
function Login() {
    const [users, setUsers] = useState([])
    const [loading,setLoading] = useState(true)
    const [email, setEmail] = useState("")
    const [senha,setSenha] = useState("")

    useEffect(()=>{
        const fetchUsers = async ()=>{
            try{
                const coisa = await fetch('http://localhost:3333/api/users')
                if(!coisa.ok){
                    throw new Error("error a buscar tarefas")
                }
                const data = await coisa.json()
                console.log(data.users)
                setUsers(data.users)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
              }
            }
        fetchUsers()
    },[setLoading])
    function handleclick(){
        console.log(users.find((element)=> element.email == email))
        if(users.find((element)=> element.email == email)!=undefined){
            const confirmar = users.find((element)=> element.email == email)
            
            if(senha == confirmar.senha){
                localStorage.setItem('nome',confirmar.nome)
                localStorage.setItem('senha',senha)
                if(localStorage.getItem('nome')!=undefined){
                   console.log('ta ai')
                }
            }
            else{
                alert('Senha incorreta')
            }
        }else{
            alert("Email não cadastrado")
        }
    }
    return (
        <>
            <div class="FundoLogin">
                <div class="CentroL">
                    <h1>Logar-se</h1>
                </div>
                <div class="EmailL">
                    <h2>Email<span>*</span></h2>
                    <input class="Input" type="text" value={email} onChange={event => setEmail(event.target.value )} />
                </div>
                <div class="SenhaL">
                    <h2>Senha<span>*</span></h2>
                    <input class="Input" type="text" value={senha} onChange={event => setSenha(event.target.value)} />
                </div>
                <div class="ConcordoL">
                    <input type="checkbox" />
                    <h4>Eu concordo em receber conteúdo promocional relacionado<br></br> com os produtos e serviços da LocLive</h4>
                </div>
                <div class="CentroL">
                    <button id="botaoL"onClick={handleclick}><h2>Entrar</h2></button>
                    <div id="perguntaL">
                        <h4>Não tem cadastro?</h4>
                        <Link class="linkL" to={'/cadastro'}><h4 class="EntrarL">Cadastrar</h4></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
