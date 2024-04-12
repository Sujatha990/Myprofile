import React from "react";

import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Icons from "./Icons";

 
function Home(){
    const handleClick = () =>{
       alert('Resume Download!');
    
    };
    return (
        
        <div className="container">
            <div class="">
                <div class="main">
                    <div class="mainText">
                        <h3 style={{color:'#9c506e'}}>Hello! I am</h3>
                        <h1 style={{color:'#9c506e'}}>Sujatha V</h1>
                        <p>Developing user-friendly web interfaces is my passion as a front-end developer. <br/>I'm looking for an entry-level job where I can use my talents in HTML, CSS, JavaScript,<br/> Bootstrap, and React.js to create responsive websites.</p>
                        <button onClick={handleClick}>Download CV</button>

                    </div>
                    <img src="./images/img1.jpeg" alt="" />
                </div>


           

            <About />
            <Projects />
            <Contact />
            </div>

        </div>

     
    
    )
}


export default Home;