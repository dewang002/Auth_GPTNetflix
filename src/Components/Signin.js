import React from "react";
import { backgroundposter } from "../utils/constents";
import Login from "./Login";
function Signin() {
  return (
    <div className="overflow-hidden h-[90vh] object-cover">
      <img className="relative" src={backgroundposter} alt="poster" />
      <div className="absolute top-0 h-full w-full bg-black opacity-55">
      </div>
        <h1 className="absolute top-20 left-[30%] text-center mt-28 text-white opacity-100 text-5xl font-bold">
          You will have to log in first
         <p className="text-2xl pt-6"><Login /></p> 
        </h1>
    </div>
  );
}

export default Signin;
