import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/common/Layout.jsx'
import Home from './components/pages/Home.jsx'
import Header from './components/common/Header'
import Login from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import Cart from './components/pages/Cart.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Product from './components/pages/Product'
import ProductDetails from './components/pages/ProductDetails'
import MainContex from './components/common/MainContex.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>
  <MainContex>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product' element={<Product/>} />
      <Route path='/productdetails/:id' element={<ProductDetails/>}/>
     </Route>
    </Routes>
  </BrowserRouter>
  </MainContex>
</StrictMode>

   
  
)
