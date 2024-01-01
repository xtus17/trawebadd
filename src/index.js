import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";



import AppSecond from "./AppSecond";
import "bootstrap/dist/css/bootstrap.min.css";
import theme from "./theme";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>

    <ChakraProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <AppSecond />
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>

  </>
);

reportWebVitals();
