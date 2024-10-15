import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from 'react-redux'
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import app from "./store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_DOMAIN;
const clientID = process.env.REACT_APP_CLIENTID;
root.render(
  <Provider store={app}>
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}>

      <App />
      
    </Auth0Provider>
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
