import React from "react";
import ImgHome from '../Image/home2.jpeg';
// import Card from "./Card";
import Footer from "./Footer";
import ProductCard from "./ProductCard";
import NavBar from "./NavBar";



function Home() {
    return (
        <>
            <NavBar />
            <div className="bg-gradient-to-r h-full from-cyan-900 to-black ">

                <div className=" h-full flex justify-between  ">
                    <div className=" ">
                        <div className="h-full w-full py-52  mx-56">
                            <h1 className="text-7xl text-pink-300 w-72  ">Shop 'til You Drop: </h1>
                            <h1 className="text-3xl text-black mt-10">Makeup for Every Occasion!</h1>
                            <button className=' bg-emerald-400 w-40 h-9 rounded-lg m-5 hover:border-green-500 hover:border-2'>More</button>
                        </div>
                    </div>
                    <div className="mr-52 rounded-lg ">
                        <div>
                            {/* <img className=" py-8 object-cover rounded-lg  " src={ImgHome} alt='Product' /> */}
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" text-6xl text-yellow-500 flex justify-center">
                        <h1>Top Products</h1>
                    </div>
                    <div className="flex justify-around mx-8 mt-12 pb-8">
                        {/* <div className=" "><Card Image="./Images/Liner/Liner1.jpg" Category="LIPS"/></div>
                <div className=" "><Card/></div>
                <div className=" "><Card/></div> */}
                        <ProductCard Category="LIPS" Price="$599"  />
                        <ProductCard Category="LIPS" Price="$599"  />
                        <ProductCard Category="LIPS" Price="$549"  />
                        {/* <ProductCard Category="LIPS" Price="$599" Image="./Images/LipSticks/LipsStick1.jpg" />
                        <ProductCard Category="LIPS" Price="$599" Image="./Images/LipSticks/LipsStick2.jpg" />
                        <ProductCard Category="LIPS" Price="$549" Image="./Images/LipSticks/LipsStick3.jpg" /> */}


                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;