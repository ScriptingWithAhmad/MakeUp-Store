import React from 'react';
// import BackGround from "../Image/BackGround.jpg";    
// import Regform from "../Image/Regform.jpg";
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {

    // const [name, setName] = useState('');
    // const [regNo, setRegNo] = useState('');
    // const [email, setEmail] = useState('');
    // const [check, setCheck] = useState('');
    const navigate = useNavigate();

    const toLogin = () => {
        navigate("/")
        // console.log ("Login Clicked");

    //     if (name === '' && regNo === '' && email === '' && check === '') {
    //         alert("Please fill all requried values")
    //     }
    //     else
    //         alert("You should receive your password on given email.")
    //         navigate("/")
    }


    // const nameText = (e) => {
    //     setName(e.target.value)

    // }
    // const regNoValue = (e) => {
    //     setRegNo(e.target.value)

    // }
    // const emailValue = (e) => {
    //     setEmail(e.target.value)

    // }
    // const checkBoxValue= (e)=>{
    //     setCheck(e.target.value)

    // }


    return (
        <>
            {/* <img  className='w-full h-screen absolute object-cover mix-blend-overlay' src={BackGround} alt="BackGround "/> */}
            <header>
                <div className='bg-black h-24'>
                    <div className=' flex justify-center '>
                        {/* <img className='h-20 w-90' src="./Images/NavbarImg.png" alt="logo"/> */}
                        <p className='text-yellow-300 font-serif  text-6xl mt-4  '>Glitter Glam</p>
                    </div>
                    
                </div>
            </header>
            <div className='grid  w-full place-items-center mt-10  '>
              
                    <form className=' h-auto w-1/3 rounded-lg border-2 border-pink-300 bg-gradient-to-r  from-cyan-900 to-black'>
                        <div className='flex justify-center my-4'>
                            <label className='text-3xl text-white'>Registration Form</label>
                        </div>
                        <div className='grid  place-items-center  my-10'>
                            <div className='m-5 '>
                                <input type='text' id='name'  className='m-5 border-b-2 outline-none bg-transparent h-9 w-64 text-white' placeholder='Full name' />
                            </div>
                            <div className='m-5 '>
                                <input type='text' id='number' className='border-b-2  outline-none bg-transparent h-9 w-64 text-white' placeholder='Mobile Number'/>
                            </div>
                            <div className='m-5'>
                                <input type='email' id='email' className='bg-transparent outline-none border-b-2 h-9 w-64 text-white ' placeholder='Email'/>
                            </div>
                            <div className='m-5'>
                                <input type='password' id='Password' className='bg-transparent outline-none border-b-2 h-9 w-64 text-white ' placeholder='Password' />
                            </div>
                            <div className='m-5'>
                                <input type='text' id='street' className='bg-transparent outline-none border-b-2 h-9 w-64 text-white ' placeholder='Address (House/Street)'/>
                            </div>
                            <div className='m-5'>
                                
                                <input type='text' id='area'  className='bg-transparent outline-none border-b-2 h-9 w-64 text-white' placeholder='Area' />
                            </div>
                            <div className='m-5'>
                                <input type='text' id='city' className='bg-transparent outline-none border-b-2 h-9 w-64 text-white' placeholder='City' />
                            </div>
                            
                            <div>
                                <button className='bg-gradient-to-l  from-lime-400 to-teal-600 w-40 h-9 rounded-lg m-5 hover:border-green-500 hover:border-2' onClick={toLogin} >Register</button>
                            </div>

                        </div>


                    </form>


                
            </div>


        </>
    );
};

export default RegistrationForm;