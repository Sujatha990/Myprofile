import React from "react";
import './App.css'
import MainRouter from "./MainRouter";
import Layout from "./Component/Layout";
import Navbar from "./Component/Navbar";



function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <MainRouter />
      </div>
    </>
  );
}

export default App;