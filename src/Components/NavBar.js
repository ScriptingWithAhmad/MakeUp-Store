import React from 'react';
import Logo from '../Image/Logo.png'


function NavBar() {

    return (
        <>
            <navbar>
                <div className=' flex justify-between  bg-black'>
                    <div className=' h-16 w-auto m-4   text-3xl  font-serif font-thin '>
                        <img className=' w-16 mx-4' src={Logo} alt="Logo" />
                    </div>
                    <ul className='flex m-4 justify-end mr-8 text-white'>
                        <li className='m-4 hover:border-b-2 hover:border-pink-500'><a href='/Home'>Home</a></li>
                       
                        <li className='m-4 hover:border-b-2 hover:border-pink-500'><a href='/Product'>Products</a></li>

                        <li className='m-4 hover:border-b-2 hover:border-pink-500'><a href='/'>Contact Us</a></li>
                        <li className='m-4 hover:border-b-2 hover:border-pink-500'><a href='/CartItem'>Cart</a></li>

                    </ul>

                </div>

            </navbar>
        </>
    );
};

export default NavBar;