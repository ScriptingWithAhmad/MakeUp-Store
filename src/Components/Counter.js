import React from "react";

function Counter() {
  return (
    <div>
      <div className="counter flex items-center text-2xl justify-start">
        Quantity
        <div className="ml-5 shadow-md flex">
        <button className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer">
          -
        </button>
        <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
          1
        </div>
        <button className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer">
          +
        </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;