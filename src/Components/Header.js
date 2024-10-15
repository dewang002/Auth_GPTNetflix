import React, { useState } from "react";
import Login from "./Login";
import Logout from "./Logout";
import { netflixIcon } from "../utils/constents";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { addGPTview } from "../store/slices/GPTslice";

function Header() {
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useAuth0();
  const [gptview, setgptview] = useState(false);
  const GPTpage = ()=>{
        dispatch(addGPTview())
  }
  return (
    <div className="z-[999] fixed px-4 h-[10vh] w-full bg-black flex justify-between items-center">
      <img className="h-24 w-52 object-cover" src={netflixIcon} alt="netflix" />
      <div className="flex items-center gap-10 text-white">
        {isAuthenticated && (
          <button onClick={GPTpage} className="p-2 rounded-lg overflow-hidden font-bold bg-purple-400">
            GPTsearch
          </button>
        )}
        {isAuthenticated && (
          <img
            className="bg-zinc-600 h-10 w-10 rounded-full"
            src={user.picture}
            alt="none"
          />
        )}
        {
          isAuthenticated?<Logout />:<Login />
        }
       
      </div>
    </div>
  );
}

export default Header;
