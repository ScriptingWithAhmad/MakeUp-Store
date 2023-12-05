import React  from "react";
import { Link } from "react-router-dom";



function ProductCard({items, handleClick}) {
    const  {image,category,price} = items;
    // const [cart, setCart] = useState(0);
    // const handleClick = (items) => {
    //     // console.log(items)
    //     cart(items)
       
    //     // setCart([...cart,items])
    //   }
    
    // const [state,setState]= useState();

    // const addToCart = () => {
    //     console.log("addtocart")



    // }

    return (
        <>
            <div className="w-full   max-w-sm bg-red-300 border   border-red-200 rounded-lg bg-gradient-to-tr from-pink-500 to-amber-500 m-6 ">
                {/* <a href="/"> */}
                <img className="p-6 rounded-lg h-96 w-full " src={image} alt="Product" />
                {/* </a> */}
                <div className="px-5 pb-5">
                    {/* <a href="/"> */}
                    <span className="text-violet-700  font-bold pb-3">{category}</span>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Description</h5>
                    {/* </a> */}

                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
                        <Link to="/CartItem" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Add to cart</Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ProductCard;