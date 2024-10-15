import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <button
      className={`p-2 bg-green-600 rounded text-white font-semibold`}
      onClick={() => loginWithRedirect()}
    >
      login
    </button>
  );
}

export default Login;
