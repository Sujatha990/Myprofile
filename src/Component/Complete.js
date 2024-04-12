import React from "react";


function Home(){
    return(
        <div>
             

        <div class="main">
             
            <div class="mainText">
                <h3>Hello I am</h3>
                <h1>Sujatha V</h1>
                <p>Hey Everyone, I am Frontend Developer passionate about creating <br/>user-friendly wed interfaces.Seeking an entry-level position to apply <br/>skills in HTML,CSS,Javascript,Bootstrap,and React.js to build and<br/> Responsive Web applications.</p>
                <button onclick="downlodeBtn()">Download CV</button>
            
            </div>
            <img src="./images/portfolio.jpg" alt=""/>
        </div>

        <div id="about">
            <div class="head">
                <h1>About Me</h1>
            </div>
            <div class="about">
                <div class="aboutText">
                     <h1>Sujatha V</h1><br/>
                     <h2>Internship</h2>
                     <p>Completed Internship at Full Stack Developer inter in java from Besant Technologies ,Hebbal,Bangalore,Karnataka.</p><br/>
                     <h2>Education</h2>
                     <p>-Bachelor of Engineering in 2019 in Computer Science with an aggreate of 70 percentage from DR.Sri Shivakumara <br/>Mahaswamy College of Engineering in Bengalore,Karnataka.</p><br/>
                     <p>-Intermediate education in 2014 with an aggreate of 59 percentage from Vijaya Chetana PU College<br/> in Chickkaballapur,Karnataka.</p><br/>
                     <p>-PUC in 2012 with an aggreate of 64 percentage from Srimathi Stella Convent,Gowribidanur,Karnataka.</p><br/>
                     <h2>Skills</h2>
                     <p>.Frontend Technologies:HTML,Css,JavaScript</p><br/>
                     <p>.Frameworks/Libraries:Bootstrap,React.js</p><br/>
                     <p>.Version Control:Git</p><br/>
                     <p>.Web Development Tools:VisualStudio Code Problem-solving and Debugging</p>
                </div>
                <img src="./images/img1.jpeg" alt=""/>
            </div>
        </div>

        <div id="work">
            <div class="head">
                <h1>Projects</h1>
            </div>
            <div class="work">
                <div class="workCard">
                    <img src="./images/ecommerce.jpeg" alt=""/>
                    <h1>Ecommerce Website</h1><br/>
                     <h2>Description</h2><br/>
                     <p>To develop an online e-commerce system that will provide a<br/> platform for customers to purchase items.
                        where users will <br/>able to purchase any product which is available on the <br/>Website.it will be easy for seelers to make a sale and save<br/> time and money.
                     </p><br/>
                     <h2>Technologies</h2><br/>
                     <p>HTML,CSS,JavaScript</p><br/>
                     <h2>IDE</h2><br/>
                     <p>VSCode</p>
                
                </div>
                <div class="workCard">
                    <img src="./images/portfolio2.png" alt=""/>
                    <h1>Portfolio</h1><br/>
                     <h2>Description</h2><br/>
                     <p>In this portfolio design will display the image,<br/>Education details,Skills and also added the<br/> Projects which are done.this Website will be <br/>completely responsive for all screen devices <br/>like mobile phones,tablets,laptops etc.
                     </p><br/>
                     <h2>Technologies</h2><br/>
                     <p>HTML,CSS,JavaScript</p><br/>
                     <h2>IDE</h2><br/>
                     <p>VSCode</p>
                    
                </div>
                <div class="workCard">
                    <img src="./images/todo.jpeg" alt=""/>
                    <h1>TO DO List</h1><br/>
                     <h2>Description</h2><br/>
                     <p>In this list user can write to do items in an input<br/> and can add the items to an array by <br/>clicking the add button.user adds on items all the <br/>items are displayed on the screen,user can <br/> edit items,delete the items at any time<br/> by clicking on the trash bin on the <br/>right side ofv each row.</p><br/>
                     <h2>Technologies</h2><br/>
                     <p>HTML,CSS,JavaScript,React.js</p><br/>
                     <h2>IDE</h2><br/>
                     <p>VSCode</p>
                    
                </div>
                <div class="workCard">
                    <img src="./images/todo.jpeg" alt=""/>
                    <h1>portfolio Website</h1><br/>
                     <h2>Description</h2><br/>
                     <p>In this Website design will display the image,<br/>Education details,Skills and also added the<br/> Projects which are done.this Website will be <br/>completely responsive for all screen devices <br/>like mobile phones,tablets,laptops etc.
                     </p><br/>
                     <h2>Technologies</h2><br/>
                     <p>HTML,CSS,JavaScript</p><br/>
                     <h2>IDE</h2><br/>
                     <p>VSCode</p>
                    
                </div>
        <div id="contact">
            <div class="head">
                <h1>Contact</h1>
            </div>
            <div class="contact">
                <input type="text" placeholder="Enter Your Name" id="name"/>
                <input type="Email" placeholder="Enter Your Email" id="email"/>
                <textarea  rows="6" cols="35" placeholder="Your Message..."  id="msg"></textarea>
                <button id="submit">Submit</button>
                
            </div>
        </div>
        </div>

        <div class="footer">
            <div class="icons">
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
            </div>
           
        </div>
     </div>
     </div>
    
    
    )
}


export default Home;
