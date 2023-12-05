import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    // const [reg, setReg]= useState("");  
    // const [pass, setPass]= useState("");  
    const navigate = useNavigate();




    const toggleHome = () => {
        console.log("Login Clicked");
        navigate("/Home");
        // if (reg === '' && pass === ''){
        //     alert("Please fill all requried values")
        // }
        // else
    }
    const toRegister = () => {
        navigate("/RegistrationForm");
    }
    // const regValid= (e)=>{
    //     setReg(e.target.value)

    // }
    // const passValid= (e)=>{
    //     setPass(e.target.value)   

    // }
    // const adminLogin = () => {
    //     // console.log("View Clicked");
    //     // props.place= 'Admin ID'
    //     // place = 'Admin ID'
    // }
    return (
        <>
            {/* <img className='w-full h-screen absolute object-none mix-blend-darken' src="./Images/LoginImg.jpg" alt="BackGround " /> */}
            <header>
                <div className='bg-black h-28'>
                    <div className=' flex justify-center '>
                        {/* <img className='h-20 w-90' src="./Images/NavbarImg.png" alt="logo"/> */}
                        <p className='text-yellow-300 font-serif  text-6xl m-4  '>Glitter Glam</p>
                    </div>
                    <span className='flex justify-end'>
                        <a className='text-red-600 mr-6 cursor-pointee ' href='/'>
                            Admin Login
                        </a>
                    </span>
                </div>
            </header>
            <div className='grid place-items-center my-40 h=screen'>

                <form className=' w-1/4 rounded-lg    bg-gradient-to-r  from-cyan-900 to-black'>
                    <div className='flex justify-center my-4'>
                        <label className='text-3xl text-white'>LOG IN</label>
                    </div>

                    <div className='grid  place-items-center  my-10'>
                        <div className='m-5 '>
                            <input type='text' id='number' className='border-b-2 outline-none bg-transparent h-9 w-48 text:ml-2 text-white ' placeholder="Username" />
                        </div>
                        <div className='m-5'>
                            <input type='password' id='password' className=' outline-none bg-transparent border-b-2 text-white ' placeholder='Password' />
                        </div>

                        <div>
                            <button type='button' className=' bg-gradient-to-l  from-green-400 to-yellow-700 w-40 h-9 rounded-lg m-5 cursor-pointer ' onClick={toggleHome}>Sign-In</button>
                        </div>
                        <div className='flex'>
                            <p className='text-white mx-1'>Don't have an account?</p>
                        </div>
                        <div>
                            <button type='button' className=' bg-transparent w-40 h-3s text-lg font-medium   text-blue-800 cursor-pointer' onClick={toRegister}  >Sign-Up</button>
                        </div>


                    </div>

                </form>

            </div>
        </>
    );
};

export default Login;