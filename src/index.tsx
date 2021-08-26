import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import "./styles.css";

import Routes from "./routes";

import { AuthProvider } from "./providers/auth";
import { ModalProvider } from "./providers/modal";
import { EloProvider } from "./providers/elos";
import { LikeProvider } from "./providers/likes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
          <EloProvider>
            <LikeProvider>
            <ModalProvider>
              <Routes />
              </ModalProvider>
            </LikeProvider>
          </EloProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
