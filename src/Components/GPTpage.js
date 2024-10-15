import React from "react";
import { backgroundposter } from "../utils/constents";
import GPTsearch from "./GPTsearch";
import GPTsuggestion from "./GPTsuggestion";

function GPTpage() {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className=" w-[100vw] h-[100vh] object-cover"
          alt="bgimg"
          src={backgroundposter}
        />
      </div>
      <div className="">
        <GPTsearch />
        <GPTsuggestion />
      </div>
    </>
  )
}

export default GPTpage;
