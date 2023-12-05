import React from "react";



function Card(props) {
    return (
        <>
            <div class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-red-400  bg-clip-border text-gray-700 shadow-lg">
                <div class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img className="h-auto" src={props.Image}alt="Product"/>
                    <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

                </div>
                <div class="p-6">
                    <div class="mb-3 flex items-center justify-between">
                        <h5 class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {props.Category}
                        </h5>
                    </div>
                    <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                        Description
                    </p>
                </div>
                <div class="p-6 pt-3">
                    <button
                        class="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white  "
                        type="button"
                        data-ripple-light="true"
                    >
                        See More
                    </button>
                </div>
            </div>
        </>
    );
};

export default Card;