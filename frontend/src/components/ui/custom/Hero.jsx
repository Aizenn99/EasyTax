import React from "react";
import Search from "./Search";


function Hero() {
  return (
    <div>
      <div className="flex flex-col items-center p-10 py-20 gap-6 h-[620px] bg-[#eef0fc]  " >
        <h2 className="text-lg  font-mono " >Find cars for sale and for rent near you </h2>
        <h2 className="text-[60px] font-bold  font-mono  " >Find your <span className="text-blue-400" >dream</span> car  </h2>
        <Search />
        <img src="bmw.avif" className="mt-10" width={830 } />
      </div>
    
    </div>
  );
}

export default Hero;
