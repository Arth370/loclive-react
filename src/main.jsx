import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../router/home.jsx'
import Sobre from '../router/Sobre.jsx'
import Produtos from '../router/Produtos.jsx'
import Cadastro  from '../router/Cadastro.jsx'
import Teclado from '../router/Teclado.jsx'
import Login from '../router/Login.jsx'
import Gabinete from '../router/Gabinete.jsx'
import Computadores from '../router/Computadores.jsx'
import Mouse from '../router/Mouse.jsx'
import Carrinho from '../router/Carrinho.jsx'
import Confirmação from '../router/Confirmação.jsx'
import Monitor from '../router/Monitor.jsx'
import Perfil from '../router/perfil.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'sobre',
    element:<Sobre/>
  },
  {
    path:'produtos',
    element:<Produtos/>
  },
  {
    path:'cadastro',
    element:<Cadastro/>
  },
  {
    path:'produtos/teclado',
    element:<Teclado/>
  },
  {
    path: 'login',
    element: <Login/>
  },
  {
    path: 'produtos/gabinete',
    element:<Gabinete/>
  },
  {
    path: 'produtos/computadores',
    element:<Computadores/>
  },
  {
    path: 'produtos/mouse',
    element:<Mouse/>
  },
  {
    path: 'carrinho',
    element:<Carrinho/>
  },
  {
    path: 'Confirmação',
    element:<Confirmação/>
  },
  {
    path: 'produtos/monitores',
    element:<Monitor/>
  },
  {
    path: 'perfil',
    element:<Perfil/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
