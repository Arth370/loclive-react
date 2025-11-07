import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../router/home.jsx'
import Sobre from '../router/Sobre.jsx'
import Produtos from '../router/Produtos.jsx'
import Cadastro  from '../router/Cadastro.jsx'
import Teclado from '../router/Teclado.jsx'
import Login from '../router/Login.jsx'
import Gabinete from '../router/Gabinete'

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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
