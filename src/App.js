// import react from "react";
import Home from "./components/Home"
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/auth/sign-up" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
