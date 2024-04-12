import React from 'react'
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Projects from "./Component/Projects";
import Icons from "./Component/Icons";
import Complete from "./Component/Complete";

function MainRouter() {

    return (
        <>
            <Router>
                <Routes>
                    {/* <Route index path="/" element={<Home />} /> */}
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/icons" element={<Icons />} />
                </Routes>
            </Router>
        </>
    )
}

export default MainRouter
