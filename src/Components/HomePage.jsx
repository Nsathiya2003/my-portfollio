import React, { useState } from 'react';
import profile from '../assets/profile.jpg';
import reactjs from '../assets/react.png';
import html from '../assets/html-5.png';
import js from '../assets/js.png';
import css from'../assets/css.png';
import nodejs from '../assets/nodejs.png';
import java from '../assets/java.png';
import mysql from '../assets/mysql.png';
import mongodb from '../assets/mongodb.png';
import communication from '../assets/communication.png';
import teamwork from '../assets/teamwork.png';
import time from '../assets/time.png';
import problem from '../assets/problem.png';
import pic from '../assets/user1.png';
import spicy from '../assets/spicy.png';
import phone1 from '../assets/phone1.png';
import phone2 from '../assets/phone2.png';
import insta from '../assets/insta.png';
import whatsapp from '../assets/whatsapp.png';
import address from '../assets/address.png';
import email from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import telegram from '../assets/telegram.png';
import DialogBox from './UsableComponents/DialogBox';
import { colors } from '@mui/material';









function HomePage() {
  const [dialogOpen,setDialogOpen]=useState(false);
  const [data,setData]=useState({
    name:"",
    email:"",
    message:""
  });

  const handleChange =(e)=>{
    const {name,value} = e.target;
    const val=value;
    console.log("value is",val);
    setData((prev) => ({
      ...prev,
      [name]: val
    }));
    console.log("data's is",data);
  }

  const handleSubmit= () =>{
    console.log('hello')
    setDialogOpen(true);
  }
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", () => {
      // Toggle the 'open' class to show/hide the menu
      navLinks.classList.toggle("open");
    });
  });
  
  
  return (
    <div>
        <div className="main">
        <header>
  <div class="header">
    <div class="profile">
      {/* <img src="your-profile-image.jpg" alt="Profile"> */}
      {/* <a href="#">My Portfolio</a> */}
    </div>
    <div class="nav">
      <button class="menu-toggle">☰</button> 
      <ul class="nav-links">
        <a href="#about-section">About</a>
        <a href="#skill-section">Skills</a>
        <a href="#project-section">Projects</a>
       <a href="#contact-section">Contact</a>
      </ul>
    </div>
  </div>
</header>

            <section className='section' id='about-section'>
                <img src={profile} 
                alt="profile" 
                />
                <div className="name">
                <h2>SATHIYA N</h2>
                <h4>SOFTWARE DEVELOPER</h4>
                </div>
              
                <div className="content">
                   
                    <h1>About</h1>
                    <div className="para">
                    <p className='para'>
                    Versatile and innovative software developer with a strong foundation in full-stack development. Proficient in front-end technologies like HTML, CSS, JavaScript, and React.js, complemented by expertise in backend frameworks such as Java, Node.js, and Express.js. Skilled in managing databases with MySQL and MongoDB, ensuring secure, efficient, and scalable solutions. During my internship at Trugo Technology, I gained hands-on experience in React, Node.js, and MySQL, where I worked on developing dynamic web applications and executing CRUD operations. Adept at building user-focused, high-performance web applications and integrating APIs seamlessly. Passionate about leveraging the MERN stack to create dynamic, reliable, and impactful software solutions. Continuously driven to embrace new challenges, learn emerging technologies, and contribute to delivering exceptional software experiences.                    </p>
                    </div>
                   
                </div>
               
            </section>
           {/* New Skills Section */}
           <section className="skills-section" id='skill-section'>

  <div className="skills-container">
    <h3>Technical Skills</h3>
    <div className="skill-item">
      <img src={html} alt="HTML" />
      <p>HTML5</p>
    </div>
    <div className="skill-item">
      <img src={css} alt="CSS" />
      <p>CSS3</p>
    </div>
    <div className="skill-item">
      <img src={js} alt="JavaScript" />
      <p>JavaScript</p>
    </div>
    <div className="skill-item">
      <img src={reactjs} alt="ReactJS" />
      <p>ReactJS</p>
    </div>
    <div className="skill-item">
      <img src={nodejs} alt="NodeJS" />
      <p>NodeJS</p>
    </div>
    <div className="skill-item">
      <img src={java} alt="Java" />
      <p>Java</p>
    </div>
    <div className="skill-item">
      <img src={mysql} alt="MySQL" />
      <p>MySQL</p>
    </div>
    <div className="skill-item">
      <img src={mongodb} alt="MongoDB" />
      <p>MongoDB</p>
    </div>
    <div className="skill-item">
      <img src={communication} alt="Communication" />
      <p>Communication</p>
    </div>
    <div className="skill-item">
      <img src={teamwork} alt="Team Collaboration" />
      <p>Team Collaboration</p>
    </div>
    <div className="skill-item">
      <img src={problem} alt="Problem Solving" />
      <p>Problem Solving</p>
    </div>
    <div className="skill-item">
      <img src={time} alt="Time Management" />
      <p>Time Management</p>
    </div>
  </div>




 
        </section>

        <section className="project-section" id='project-section'>
  <h3>Projects</h3>
  <div className="project-container">
    <div className="project-item">
      <img src={spicy} alt="HTML" />
      <h4>Spicy Hut
      <p>The SpicyHut restaurant website features a responsive UI showcasing their menu, services, and contact details.</p>
      </h4>
    </div>
    <div className="project-item">
      <img src={pic} alt="HTML" />
      <h4>User Authentication System
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea.</p>
      </h4>
    </div>
    {/* <div className="project-item">
      <img src={pic} alt="HTML" />
      <h4>Spicy Hut
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea.</p>
      </h4>
    </div>
    <div className="project-item">
      <img src={pic} alt="HTML" />
      <h4>Spicy Hut
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, ea.</p>
      </h4>
    </div> */}
    </div>
</section>
{/* <!-- Internship Experience Section --> */}
<section className="internship-section" id="internship-section">
  <h3>Experience</h3>
  <div className="internship-container">
    <div className="internship-item">
      <div className="internship-points">
        <h2>Trugo Technology</h2>
        <h2>Software Development Internship</h2>
        <h4>April 2024 - June 2024</h4>
        <ul>
  <li>Developed dynamic, user-centric web applications using React.js, improving user experience and interface interactivity</li>
  <li>Implemented CRUD operations in Node.js, integrating MySQL to ensure fast and efficient data retrieval and management</li>
  <li>Collaborated with UI/UX designers to ensure seamless integration between front-end and back-end technologies</li>
  <li>Improved system security by implementing user authentication and authorization protocols in Node.js</li>
  <li>Built and maintained RESTful APIs, integrating third-party services and ensuring smooth communication between the front-end and back-end</li>
  <li>Enhanced the scalability of the application by refactoring code and improving performance across various modules</li> 
  <li>Worked with version control systems like Git, ensuring proper code collaboration and tracking changes effectively</li>
  <li>Enhanced the scalability of the application by refactoring code and improving performance across various modules</li> 
  <p style={{color:"aqua",letterSpacing:1}}>
    <strong style={{
    color:"lightgreen",}}>Technologies : </strong>Html,Css,JavaScript,React.js,Node.js,Express.js,MySQL</p>
  <p style={{color:"aqua",letterSpacing:1}}>
    <strong style={{
    color:"lightgreen",}}>Worked Projects : </strong>Salesman-tracking,VKR Club</p>

</ul>

        <div className="key">
        </div>
     </div>

      
    </div>
  </div>
</section>
{/* Eductaion section */}
<div className="education-section" id="education-section">
  <h3>Education</h3>
  <div className="education-container">
    <div className="education-item">
      <div className="education-line"></div>
      <div className="education-dot"></div>
      <div className="education-content">
        <h4>Bachelor's Degree in Electronics and Communication </h4>
        <p>Dhirajlal Gandhi College of Technology, Salem</p>
        <p>2020 - 2024</p>
      </div>
    </div>
    <div className="education-item">
      <div className="education-line"></div>
      <div className="education-dot"></div>
      <div className="education-content">
        <h4>HSC</h4>
        <p>Government Girls Higher Secondary School ,Mecheri</p>
        <p>2018 - 2020</p>
      </div>
    </div>
    
    <div className="education-item">
      <div className="education-line"></div>
      <div className="education-dot"></div>
      <div className="education-content">
        <h4>SSLC</h4>
        <p>Government Secondary School ,Aranganur</p>
        <p>2017 - 2018</p>
      </div>
    </div>
  </div>
</div>



<section className="contact-section" id='contact-section'>
  <h3 style={{textAlign:"start"}}>Contact</h3>
  <div className="contact-container">
    <div className="contact-item">

      <div className="icons">
          <div className="icons-item">
          <img src={phone1} alt="contact" />
            <a>+91 9597246647</a>
         </div>
         <div className="icons-item">
          <img src={email} alt="email" />
            <a href='nsathiya757@gmail.com'>nsathiya757@gmail.com</a>
         </div>
         <div className="icons-item">
          <img src={linkedin} alt="linkedIn" />
            <a href='https://www.linkedin.com/in/sathiya-n-14395a253'>https://www.linkedin.com/in/sathiya-n-14395a253</a>
         </div>
         <div className="icons-item">
          <img src={github} alt="github" />
            <a href='https://github.com/Sathiya8'>https://github.com/Sathiya8</a>
         </div>
         <div className="additional">
          <a href='www.whatsapp.com'><img src={whatsapp} alt="github" /></a>
          <a href='www.whatsapp.com'><img src={telegram} alt="github" /></a>
          <a href='www.whatsapp.com'><img src={insta} alt="github" /></a>

         </div>
 </div>
     
    </div>
    <div className="contact-item">
    <h3>Direct Message Me..!!</h3>
        <div className="fields">
        <input type="text" name="name" value={data.name} onChange={handleChange} placeholder='Enter your name' />
        <input type="emal" name='email' value={data.email} onChange={handleChange} placeholder='Enter your email' />
        <textarea
         type="text" 
         name='message'
         value={data.message} onChange={handleChange}
         aria-multiline
         placeholder='Enter your message'
          />
        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>Send</button>

      </div>
    </div>
</section>
        </div>
        {dialogOpen && (
          <DialogBox 
            open={dialogOpen}
            onClose={()=>setDialogOpen(false)}
            data={data}
          />
        )}
    </div>
   
  )
}

export default HomePage
