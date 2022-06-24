import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Repositories from "./pages/home/repositories/repositories";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/repositories" element={<Repositories/>} />
            </Routes>
        </BrowserRouter>
    )
}