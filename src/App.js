import React from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Signin from "./Components/Signin";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
function App() {
  const gptview = useSelector(state=>state.gptview.showgpt)
  const { isAuthenticated, user } = useAuth0();
 
  return (
    <div>
      <Header />
      {!isAuthenticated && <Signin />}
      {isAuthenticated && <Body />}
    </div>
  );
}

export default App;
