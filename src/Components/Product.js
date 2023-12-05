import React from "react";
import ProductCard from "./ProductCard";
import NavBar from "./NavBar";
import Data from "./Data";
import Footer from "./Footer";


function Product(handleClick, cart) {

   

    
    return (
        <>
            <NavBar />
            <div className="Main bg-gradient-to-r h-full from-cyan-900 to-black p-6 ">
                <div className="P-1 flex justify-evenly flex-wrap  w-auto m-6 ">

                    {Data.map((item) => (
                        <ProductCard items={item} key={item.id} handleClick={handleClick} cart={cart}/>
                    ))}
                </div>
                {/* { <div className="Category-1  ">
                    <h1 className="text-4xl font-e m-14 text-black text-center  rounded-lg bg-gradient-to-tr from-purple-700 to-purple-400">LIPS</h1>
                    <h1 className="text-4xl font-e m-14 text-amber-500 ">Lipsticks </h1>
                    <div className="P-1 flex justify-around  w-auto m-6">
                        <ProductCard  Category="LIPS" Price="$599" Image="./Images/LipSticks/LipsStick1.jpg"/>
                        <ProductCard  Category="LIPS" Price="$599" Image="./Images/LipSticks/LipsStick2.jpg"/>
                        <ProductCard  Category="LIPS" Price="$549" Image="./Images/LipSticks/LipsStick3.jpg"/>
                        <ProductCard  Category="LIPS" Price="$549" Image="./Images/LipSticks/LipsStick4.jpg"/>

                    </div>
                    <div className="P-1 flex justify-around  w-auto m-6">
                        <ProductCard  Category="LIPS" Price="$499" Image="./Images/LipSticks/LipsStick5.jpg"/>
                        <ProductCard  Category="LIPS" Price="$499" Image="./Images/LipSticks/LipsStick6.jpg"/>
                        <ProductCard  Category="LIPS" Price="$399" Image="./Images/LipSticks/LipsStick7.jpg"/>
                        <ProductCard  Category="LIPS" Price="$399" Image="./Images/LipSticks/LipsStick8.jpg"/>

                    </div>
                    <h1 className="text-4xl font-e m-14 text-amber-500 ">Liner</h1>
                    <div className="P-1 flex justify-around  w-auto m-6">
                        <ProductCard  Category="LIPS" Price="$199" Image="./Images/Liner/Liner1.jpg"/>
                        <ProductCard  Category="LIPS" Price="$149" Image="./Images/Liner/Liner2.jpg"/>
                        <ProductCard  Category="LIPS" Price="$99" Image="./Images/Liner/Liner3.jpg"/>
                        <ProductCard  Category="LIPS" Price="$99" Image="./Images/Liner/Liner4.jpg"/>
                    </div>
                    <h1 className="text-4xl font-e m-14 text-amber-500 ">Gloss</h1>
                    <div className="P-1 flex justify-around  w-auto m-6">
                        <ProductCard  Category="LIPS" Price="$199" Image="./Images/Gloss/Gloss1.jpg"/>
                        <ProductCard  Category="LIPS" Price="$149" Image="./Images/Gloss/Gloss2.jpg"/>
                        <ProductCard  Category="LIPS" Price="$99" Image="./Images/Gloss/Gloss3.jpg"/>
                        <ProductCard  Category="LIPS" Price="$99" Image="./Images/Gloss/Gloss4.jpg"/>
                        </div>
                        
                    </div> } */}


            </div>
            <Footer />
        </>
    );
};

export default Product;