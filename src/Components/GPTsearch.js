import React, { useRef} from "react";
import useGPTsuggest from "../Hooks/useGPTsuggest";

function GPTsearch() {
  let searchtext = useRef(null);
  const {handleGpt}=useGPTsuggest(searchtext)
  return (
    <div>
      <form
        className="absolute left-[50%] -translate-x-[50%] top-[10vh]"
        onSubmit={(elem) => elem.preventDefault()}
      >
        <input
          ref={searchtext}
          className="outline-none text-lg font-semibold px-4 rounded-full rounded-r-none h-12 w-[40vw]"
          type="text"
        />
        <button
          onClick={handleGpt}
          className="text-white rounded-r-full bg-red-700 p-[0.65vw]"
        >
          search
        </button>
      </form>
    </div>
  );
}

export default GPTsearch;
