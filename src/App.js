import React from 'react';
import './App.css';
import Login from './Components/Login';
import Product from './Components/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import RegistrationForm from './Components/RegistrationForm';
// import Cart from './Components/Cart';
import CartItem from './Components/CartItem';

function App({cart}) {
  

  const handleClick = (items) => {
    // console.log(items)
    cart(items)
  }
  
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' Component={Login} />
          <Route path='/Home' Component={Home} />
          <Route path='/RegistrationForm' Component={RegistrationForm} />
          <Route path='/Product' Component={Product } />
          <Route path='/CartItem' element={CartItem} cart={cart} handleClick={handleClick} />
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <RegistrationForm/> */}
      {/* <Login/> */}
      {/* <Product/> */}
      {/* <Cart/> */}

    </>
  );
};

export default App;
