import ReactDOM from "react-dom/client";

import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import NavBar from "./components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<div>Hello world</div>} />
      <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
  </BrowserRouter>
);
