import React from 'react'

const Projects = () => {
    return (
        <>
            {/* <div className='projects'>
                <div id="work">
                    <div class="head">
                        <h1 style={{ color: '#9c506e' }}>Projects</h1>
                    </div>
                    <div class="work">
                        <div class="workCard">

                            <div className='project'>
                                <p> <h1 style={{ color: '#362262' }}>Project 01- Portfolio </h1> <br />Utilizing a blend of<b> HTML, CSS, JavaScript, and React.js </b>within <b>Visual Studio Code</b>.<br /><br /><br />
                                    Introducing a responsive portfolio design! This sleek platform elegantly showcases<br />
                                    portrait, education, skills, and projects. It's tailored to look perfect on any screen,<br />
                                    from mobile phones to laptops. Flaunt your professional journey with style<br /> and accessibility.
                                </p><br />
                                <div className='image1'>
                                    <img src="./images/portfolio2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="work">
                        <div class="workCard">

                            <div className='project'>
                                <p> <h1 style={{ color: '#362262' }}>Project 02- To-Do List </h1> <br />Utilizing a blend of <b>HTML, CSS, JavaScript, and React.js </b>within <b>Visual Studio Code</b>.<br /><br /><br />

                                    Introducing our streamlined To-Do List. Effortlessly add, edit, and delete tasks<br />
                                    with a simple click. Stay organized and focused on what matters most.<br /> Try it now and transform
                                    the way you manage your tasks!
                                </p><br />
                                <div className='image1'>
                                    <img src="./images/todo.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="work">
                        <div class="workCard">

                            <div className='project'>
                                <p> <h1 style={{ color: '#362262' }}>Project 03- E-Commerce Website </h1> <br />Utilizing a blend of<b> HTML, CSS and JavaScript,</b> within <b>Visual Studio Code</b>.<br /><br /><br />

                                    Introducing our user-friendly E-commerce platform, where customers can easily <br />browse and
                                    purchase a wide range of products, while merchants enjoy simplified a <br />sales processes,
                                    saving time and increasing revenue.

                                </p><br />
                                <div className='image1'>
                                    <img src="./images/ecommerce.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="work">
                        <div class="workCard">

                            <div className='project'>
                                <p> <h1 style={{ color: '#362262' }}>Project 04- Portfolio </h1> <br />Utilizing a blend of <b>HTML, CSS, JavaScript, and React.js </b>within <b>Visual Studio Code</b>.<br /><br /><br />

                                    Introducing our streamlined To-Do List. Effortlessly add, edit, and delete tasks
                                    with a <br />simple click. Stay organized and focused on what matters most.Try it now and<br /> transform
                                    the way you manage your tasks!


                                </p><br />
                                <div className='image1'>
                                    <img src="./images/port.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div> */}

            {/* ---------------------- */}
            <div className='proj-container'>


                <h2 style={{ color: '#9c506e' }} className='sub-head'>Projects</h2>
                <div class="proj-inner-container">
                    <div class="proj-column">
                        <h3 style={{ color: '#362262' }}>Project 01- Portfolio </h3>
                        <p> <br />Utilizing a blend of<b> HTML, CSS, JavaScript, and React.js </b>within <b>Visual Studio Code</b>.<br /><br />
                            Introducing a responsive portfolio design! This sleek platform elegantly showcases<br />
                            portrait, education, skills, and projects. It's tailored to look perfect on any screen,<br />
                            from mobile phones to laptops. Flaunt your professional journey with style<br /> and accessibility.
                        </p>
                    </div>
                    <div class="proj-column">
                        <img src="./images/project1.png" alt="" className='proj-img' />
                    </div>
                </div>

                <div class="proj-inner-container">
                    <div class="proj-column">
                        <h3 style={{ color: '#362262' }}>Project 02- To-Do List </h3>
                        <p> <br />Utilizing a blend of <b>HTML, CSS, JavaScript, and React.js </b>within <b>Visual Studio Code</b>.<br /><br />

                            Introducing our streamlined To-Do List. Effortlessly add, edit, and delete tasks<br />
                            with a simple click. Stay organized and focused on what matters most.<br /> Try it now and transform
                            the way you manage your tasks!
                        </p>
                    </div>
                    <div class="proj-column">
                        <img src="./images/todo.jpeg" alt="" className='proj-img' />
                    </div>
                </div>

                <div class="proj-inner-container">
                    <div class="proj-column">
                        <h3 style={{ color: '#362262' }}>Project 03- E-Commerce Website </h3>
                        <p> <br />Utilizing a blend of<b> HTML, CSS and JavaScript,</b> within <b>Visual Studio Code</b>.<br /><br />

                            Introducing our user-friendly E-commerce platform, where customers can easily <br />browse and
                            purchase a wide range of products, while merchants enjoy simplified a <br />sales processes,
                            saving time and increasing revenue.

                        </p>
                    </div>
                    <div class="proj-column">
                        <img src="./images/ecommerce.jpeg" alt="" className='proj-img' />
                    </div>
                </div>

                <div class="proj-inner-container">
                    <div class="proj-column">
                        <h3 style={{ color: '#362262' }}>Project 04- Portfolio </h3>
                        <p>  <br />Utilizing a blend of <b>HTML, CSS and JavaScript</b> within <b>Visual Studio Code.</b><br/><br/>

Introducing a responsive portfolio design! This sleek platform elegantly showcases portrait, education, skills, and projects. It's tailored to look perfect on any screen, from mobile phones to laptops. Flaunt your professional journey with style and accessibility.


                        </p>
                    </div>
                    <div class="proj-column">
                        <img src="./images/portfolio2.png" alt="" className='proj-img' />
                    </div>
                </div>
            </div>
        </>




    )
}

export default Projects


/*<div class="work">
<div class="workCard">
    
    <div className='project'>
     <p> <h1 style={{color:'#362262'}}>Project 03- E-Commerce Website </h1> <br/>Utilizing a blend of<b> HTML, CSS and JavaScript,</b> within <b>Visual Studio Code</b>.<br/><br/><br/>
     Introducing our user-friendly E-commerce platform, where customers can easily browse and <br/>
     purchase a wide range of products, while merchants enjoy simplified sales processes, <br/>
     saving time and increasing revenue.
     </p><br/>
     <div className='image1'>
     <img src="./images/ecommerce.jpeg" alt=""/>
</div>
</div>
</div>
</div>
<div class="work">
<div class="workCard">
    
    <div className='project'>
     <p> <h1 style={{color:'#362262'}}>Portfolio </h1> <br/>Utilizing a blend of<b> HTML, CSS, JavaScript, and React.js </b>within <b>Visual Studio Code</b>.<br/><br/><br/>
Introducing a responsive portfolio design! This sleek platform elegantly showcases<br/>
portrait, education, skills, and projects. It's tailored to look perfect on any screen,<br/>
from mobile phones to laptops. Flaunt your professional journey with style and accessibility.
     </p><br/>
     <div className='image1'>
     <img src="./images/portfolio2.png" alt=""/>
</div>
</div>
</div>
</div>*/