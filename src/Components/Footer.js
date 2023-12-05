import React from "react";
import Logo from '../Image/Logo.png'


function Footer() {
    return (
        <>
            {/* <footer className="flex w-full   justify-between   p-9 border-t  py-6 text-center bg-gradient-to-r h-full to-cyan-900 from-black text-white">
                <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    © 2023 Glitter Glam
                </p>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                   
                    <li>
                        <a
                            href="/"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-green-500 focus:text-yellow-500"
                        >
                            License
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 focus:text-pink-500"
                        >
                            Contribute
                        </a>
                    </li>
                    
                </ul>
            </footer> */}
            <footer className="w-full bg-black p-8">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-black text-white text-center md:justify-between">
                    <img src={Logo} alt="logo-ct" className="w-44 h-full " />
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <a
                                href="/"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased transition-colors hover:text-pink-500 "
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900  hover:text-pink-500 "
                            >
                                License
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900  hover:text-pink-500"
                            >
                                Contribute
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900  hover:text-pink-500"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-blue-gray-50" />
                <p className="block text-center font-sans text-base font-normal leading-relaxed text-blue-gray-900 text-white">
                    © 2023 Glitter Glam 
                </p>
            </footer>
        </>
    );
};

export default Footer;