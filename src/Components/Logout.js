import { useAuth0 } from "@auth0/auth0-react";

export default function Logout(){
    const {logout}=useAuth0()
    return <button className="bg-red-600 rounded text-white font-semibold p-2" onClick={()=>logout({logoutParams:{returnTo:window.location.origin}})}>Logout</button>
}