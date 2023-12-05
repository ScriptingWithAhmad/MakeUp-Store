import React from "react";



function Catagories() {
    return (
        <>
        

                <div className="Main div  border-black flex justify-evenly h-screen mt-6">
                    <div className="Sub-1 border-2 border-red-500 h-96 w-56  content-evenly grid ">
                        <h2 className=" text-center text-lg font-bold">LIPS</h2>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-lg hover:cursor-pointer"><a href="/">LipSticks & Liners</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Liquid LipSticks</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Lip Bam</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Gloss</a></option>
                    </div>
                    <div className="Sub-2 border-2 border-red-500 h-96 w-56  content-evenly grid ">
                        <h2 className=" text-center text-lg font-bold">EYES</h2>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-lg hover:cursor-pointer"><a href="/">Eye Liner</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Kajal</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Mascara</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Eye Shadow</a></option>
                    </div>
                    <div className="Sub-3 border-2 border-red-500 h-96 w-56  content-evenly grid ">
                        <h2 className=" text-center text-lg font-bold">FACE</h2>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-lg hover:cursor-pointer"><a href="/">Foundation</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Pimer</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Blush</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Highliter</a></option>
                    </div>
                    <div className="Sub-4 border-2 border-red-500 h-96 w-56  content-evenly grid ">
                        <h2 className=" text-center text-lg font-bold">NAILS</h2>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-lg hover:cursor-pointer"><a href="/">Nail Color</a></option>
                        <option className="text-center hover:text-orange-800 hover:font-bold hover:text-xl hover:cursor-pointer"><a href="/">Polish Remover</a></option>
                    </div>




                </div>


                {/* <form method="POST" action="#" role="none">
                            <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                        </form> */}



                        
        </>
    );
};

export default Catagories;