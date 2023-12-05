import React from "react";
import Counter from "../Components/Counter";
// import ProductCard from "./ProductCard";
// import Product from "./Product";
const Cart = ({cart}) => {
    return (
        <>
            {
                cart.map((items)=>(

                    <div className="p-3 w-screen  h-screen bg-gradient-to-r  from-cyan-900 to-black text-white" >
                        <div className="flex justify-center text-5xl">Cart</div>
                        {/* vertically center parent div */}
                        <div className="flex flex-col mt-7 justify-center">
                            <div className="flex flex-col flex-1">
                                {/* 1st product div */}
                                {/* <div className={ProductDivStyle}> */}
                                <div  className="flex justify-center w-auto">
                                    <div className=" product flex pl-5 self-start">
                                        <img
                                            className="product_img w-[7rem] border-black border-2 "
                                            // src={props.Image}
                                            src={items.Image}
                                            // src="./Images/LipSticks/LipsStick1.jpg"
                                            alt="product_img"
                                        />

                                        <div className="disc flex items-start justify-between h-auto flex-col ml-6">
                                            <p>
                                                <b className="mr-2">Category:</b>{items.Category}
                                            </p>
                                            <p>
                                                <b className="mr-2">Description</b>
                                            </p>
                                            
                                        </div>
                                    <div className="h-24 w-24 mx-44 ">
                                        <Counter />
                                        <p className="flex items-center justify-center text-4xl mt-3">
                                            <b>70$</b>
                                        </p>
                                    </div>
                                    </div>

                                    {/*Price and Quantity Div*/}
                                </div>

                                <hr className="mb-7 mt-7 mobile:mt-0" />
                                
                            </div>
                            <div className="flex justify-center">

                            <div className="Summary flex-[0.4] flex flex-col    w-96 h-[30vh] border-2 border-[#8a4af3] rounded-md shadow-lg p-5 text-lg mobile:mb-6">
                                <h1 className="text-[2rem] flex justify-center">SUMMARY</h1>
                                <div className=" my-6 flex justify-center">
                                    <p className="mx-10">SubTotal:</p>
                                    <p className="mx-10" >$140</p>
                                </div>
                                <div className="flex justify-around">

                                    <div className="flex">
                                        <p className="m-6">Shipping:</p>
                                        <p className="m-6">$10</p>
                                    </div>
                                    <div className="flex">
                                        <p className="m-6">Shipping Discount:</p>
                                        <p className="m-6">-$10</p>
                                    </div>
                                </div>
                                <div className="flex  justify-center text-3xl font-bold m-6">
                                    <p className="mx-10">Total :</p>
                                    <p className="mx-10">$140</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    
                ))
            }
            
         </>
    )
};

export default Cart;