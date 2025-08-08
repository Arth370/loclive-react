import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../router/home.jsx'
import Sobre from '../router/Sobre.jsx'
import Produtos from '../router/Produtos.jsx'

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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
