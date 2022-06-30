import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppAuth from './AppAuth'
import Form from "./Component/Form";
import Reducer from "./UseReducer/Reducer";


import App from "./App";
// import Form from "./FormAssignment/Form";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <Reducer/>
    </StrictMode>
  </BrowserRouter>
);
