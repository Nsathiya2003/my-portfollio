import React, { useState } from 'react';
import profile from '../assets/sathiya.png';
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
import emailjs from 'emailjs-com';


function HomePage() {
  const [dialogOpen,setDialogOpen]=useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
     setError((prevErrors) => ({ ...prevErrors, [name]: "" }));

  };
  const [error,setError]=useState({
    username:"",
    email:"",
    message:""
  })
  
  const validateFields = () => {
    let newErrors = {}; 
    if (!data.username) newErrors.username = "Your name is required";
    if (!data.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = "Invalid email format";
    if (!data.message) newErrors.message = "Message is required";
    console.log("Validation Errors:", newErrors); // Debug logs
    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateFields()) {
      console.log("Validation failed. Fix errors before submitting.");
      return; // Exit if validation fails
    }
  
    try {
    
      const result = await emailjs.send(
        "service_2omatgu", // Replace with your EmailJS Service ID
        "template_5aw2um8", // Replace with your EmailJS Template ID
        {
          name: data.username,
          email: data.email,
          message: data.message,
        },
        "1nSq_4Y-mQ95uLvmq" // Replace with your EmailJS Public Key
      );
      console.log("Email sent successfully:", result.text);
      // Optionally reset form data here
      setDialogOpen(true);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };
   

  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", () => {
      // Toggle the 'open' class to show/hide the menu
      navLinks.classList.toggle("open");
    });
  });
  const [experience,setExperience]=useState(true);
  const [education,setEducation]=useState(false);
  const [skills,setSkills]=useState(false);
  const [contact,setContact]=useState(false);

  const [activeSection, setActiveSection] = useState("experience");

  const handleClick = (e,field)=>{
    console.log("helooo")
    e.preventDefault();
    setActiveSection(field);
   
  }
  
  return (
    <body>
        <header>
            <a href="#" className='logo'>Sathiya</a>
            <i  className='bx bx-menu' id='menu-icon'></i>
            <nav>
              <a href="#about-section" className='active'>About</a>
              <a href="#skill-section">Skills</a>
              <a href="#project-section">Resume</a>
              <a href="#internship-section">Experience</a>
              <a href="#contact-section">Contact</a>
            </nav>
        </header>
        {/* ---Home section--- */}
      <section className='home '>
        <div className="home-detail">
          <h1>SATHIYA N</h1>
          <h2>
            I'm a  
            <span >Software developer</span>
            {/* <span style={{ "--i": 2 }} data-text="Front-end developer">Front-end developer</span>
            <span style={{ "--i": 1 }} data-text="Back-end developer">Back-end developer</span> */}
          </h2> 
          <p>Versatile and innovative software developer with a strong foundation in full-stack development. Proficient in front-end technologies like HTML, CSS, JavaScript, and React.js, complemented by expertise in backend frameworks such as Java, Node.js, and Express.js. Skilled in managing databases with MySQL and MongoDB, ensuring secure, efficient, and scalable solutions. During my internship at Trugo Technology, I gained hands-on experience in React, Node.js, and MySQL, where I worked on developing dynamic web applications and executing CRUD operations. Adept at building user-focused, high-performance web applications and integrating APIs seamlessly. Passionate about leveraging the MERN stack to create dynamic, reliable, and impactful software solutions. Continuously driven to embrace new challenges, learn emerging technologies, and contribute to delivering exceptional software experiences.                    </p>
          <div className="btn-links">
           <a href="#" className='btn'>Download Resume</a>
           <div className="links">
                <a href="#"><i className="bx bxl-github" ></i></a>
                <a href="#"><i className='bx bxl-linkedin-square'></i></a>
                <a href="#"><i className='bx bxl-gmail'></i></a>
                <a href="#"><i className='bx bxl-whatsapp'></i></a>
           </div>
          </div>
        </div>  
          <div className="home-img">
              <div className="img-box">
                <div className="img-item">
                  <img src={profile} alt="Profile" />
                </div>
              </div>
            
            </div>   
      </section>
      <section className='skills '>
        <h2 className="heading">My<span>Skills</span></h2>
        <div className="skills-container">
          <div className="skills-box">
            <div className="icon">
            <i className='bx bxl-html5'></i>
              <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>Html</h3>
            <p>The backbone of web pages, defining structure and content.</p>
            </div>
          
          <div className="skills-box">
            <div className="icon">
            <i className='bx bxl-css3'></i>
            <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>Css</h3>
            <p>Used to style web pages with colors, layouts, and animations.</p>
            </div>
            <div className="skills-box">
            <div className="icon">
            <i className='bx bxl-tailwind-css'></i>
            <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>Tailwind css</h3>
            <p>A utility-first CSS framework for rapid UI development.</p>
            </div>
          <div className="skills-box">
            <div className="icon">
            <i className='bx bxl-javascript'></i>
            <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>Javascript</h3>
            <p>Makes web pages interactive with dynamic elements and logic.</p>
            </div>
          <div className="skills-box">
            <div className="icon">
            <i className='bx bxl-react'></i>
            <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>React.js</h3>
            <p>A JavaScript library for building modern UI components efficiently.</p>
            </div>
          <div className="skills-box">
            <div className="icon">
            <i className='bx bxl-nodejs'></i>
            <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>Node.js</h3>
            <p>A runtime environment for running JavaScript on the server.</p>
            </div>
          <div className="skills-box">
            <div className="icon">
            <i className='bx bx-server'></i>
            <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>Express.js</h3>
            <p>A lightweight framework for building web servers with Node.js.</p>
            </div>
          <div className="skills-box">
            <div className="icon">
              <i className='bx bxs-data'></i>
              <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>MySql</h3>
            <p>A relational database used to store and manage structured data.</p>
            </div>
          <div className="skills-box">
            <div className="icon">
              <i className='bx bxl-mongodb'></i>
              <a href='#'><i className='bx bx-arrow-back'></i></a>
            </div>
            <h3>MongoDB</h3>
    <p>A NoSQL database designed for high performance and scalability.</p>
          </div>
        </div>
       
      </section>
      <section className="resume active">
          <div className="resume-container">
            <div className="resume-box">
              <h2>Why Hire Me?</h2>
              <p>I have strong skills in web development and a passion for creating user-friendly applications. I am dedicated and committed to delivering high-quality work.</p>
            <button className={`resume-btn ${activeSection === 'experience' ? "active" : ""}`} 
                    onClick={(e) => handleClick(e, 'experience')}>
              Experience
            </button>

            <button className={`resume-btn ${activeSection === 'education' ? "active" : ""}`} 
                    onClick={(e) => handleClick(e, 'education')}>
              Education
            </button>

            <button className={`resume-btn ${activeSection === 'skills' ? "active" : ""}`} 
                    onClick={(e) => handleClick(e, 'skills')}>
              Skills
            </button>

            <button className={`resume-btn ${activeSection === 'contact' ? "active" : ""}`} 
                    onClick={(e) => handleClick(e, 'contact')}>
              About Me
            </button>


            </div>
            <div className="resume-box">
              {activeSection==='experience' &&
                <div className='resume-detail-experience'>
                    <h2 className='heading'>My<span>Experience</span></h2>
                <div className="resume-list">
                  <div className="resume-skills-item">
                      <div className="resume-item1">
                        <h3 className='resume-title'>Software Developer Internship<span className='year'>Apr 2024- Sep 2024</span></h3>
                        <p className='company'>Trugo Technologies,Salem.</p>
                      </div>
                      <ul className='resume-ul-list'>
                        <li>Developed dynamic, user-centric web applications using React.js, improving user experience and interface interactivity</li>
                        <li>Implemented CRUD operations in Node.js, integrating MySQL to ensure fast and efficient data retrieval and management</li>
                        <li>Collaborated with UI/UX designers to ensure seamless integration between front-end and back-end technologies</li>
                        <li>Improved system security by implementing user authentication and authorization protocols in Node.js</li>
                        <li>Built and maintained RESTful APIs, integrating third-party services and ensuring smooth communication between the front-end and back-end</li>
                        <li>Worked with version control systems like Git, ensuring proper code collaboration and tracking changes effectively</li>
                        <li>Enhanced the scalability of the application by refactoring code and improving performance across various modules</li> 
                        <p style={{color:"aqua",letterSpacing:1}}>
                          <strong style={{
                          color:"lightgreen",}}>Technologies : </strong>Html,Css,JavaScript,React.js,Node.js,Express.js,MySQL</p>
                        <p style={{color:"aqua",letterSpacing:1}}>
                          <strong style={{
                          color:"lightgreen",}}>Worked Projects : </strong>Salesman-tracking,VKR Club</p>

                      </ul>

                  </div>
                </div>
               </div>
              }
               {activeSection==='education'  &&
                <div className='education-detail-education'>
                <h2 className='heading'>My<span>Education</span></h2>
                <div className="education-list">
                    <div className="education-item">
                      <p className='year'>2020-2024</p>
                      <h4>B.E-Electronics and Communication Engineering</h4>
                      <p>CGPA - 8.7</p>
                      <p>Dhirajlal Gandhi College of Technology,Salem</p>
                    </div>
                    <div className="education-item">
                      <p className='year'>2018-2020</p>
                      <h3>Higher Secondary Certificate(HSC)</h3>
                      <p>Percentage - 65 %</p>
                      <p>Government Girls Higher Secondary School ,Mecheri</p>
                    </div> 
                     <div className="education-item">
                      <p className='year'>2017-2018</p>
                      <h3>Secondary School Leaving Certificate(SSLC)</h3>
                      <p>Percentage - 85 %</p>
                      <p> Government Secondary School ,Aranganur</p>
                    </div>
                </div>
               </div>
              }
               {activeSection==='skills'  &&
                <div className='resume-detail-skills'>
                <h2 className='heading'>My<span>Skills</span></h2>
                <div className="resume-skills-list">
                  <div className="resume-skills-item">
                      <i className='bx bxl-html5'></i>
                      <span>HTML</span>
                  </div>
                  <div className="resume-skills-item">
                      <i className='bx bxl-css3'></i>
                      <span>CSS3</span>
                  </div>
                  <div className="resume-skills-item">
                      <i className='bx bxl-tailwind-css'></i>
                      <span>Tailwind CSS</span>
                  </div>
                  <div className="resume-skills-item">
                      <i className='bx bxl-javascript'></i>
                      <span>JavaScript</span>
                  </div>
                  <div className="resume-skills-item">
                      <i className='bx bxl-react'></i>
                      <span>React.js</span>
                  </div>
                  <div className="resume-skills-item">
                      <i className='bx bxl-nodejs'></i>
                      <span>Node.js</span>
                  </div>
                  <div className="resume-skills-item">
                      <i className='bx bx-server'></i>
                      <span>Express.js</span>
                  </div>
                  <div className="resume-skills-item">
                      <i className='bx bxs-data'></i>
                      <span>MySQL</span>
                  </div>
                  <div className="resume-skills-item">
                      <i className='bx bxl-mongodb'></i>
                      <span>MongoDB</span>
                  </div>
              </div>

               </div>
              
              }
               {activeSection==='contact'  &&
                <div className='resume-detail-about'>
                <h2 className='heading'>About<span>Me</span></h2>
                <div className="resume-about-list">
                  <div className="resume-about-item">
                    <p>Name <span>Sathiya Nallathambi</span></p>
                  </div>
                  <div className="resume-about-item">
                    <p>Gender <span>Female</span></p>
                  </div>
                  <div className="resume-about-item">
                    <p>Age <span>22 Years Old</span></p>
                  </div>
                  <div className="resume-about-item">
                    <p>City <span>Salem</span></p>
                  </div>
                  <div className="resume-about-item">
                    <p>State <span>Tamilnadu</span></p>
                  </div>
                  <div className="resume-about-item">
                    <p>Country <span>India</span></p>
                  </div>
                  <div className="resume-about-item">
                    <p>Email <span><a href='nsathiya757@gmail.com'>nsathiya757@gmail.com</a></span></p>
                  </div> 
                   
                  <div className="resume-about-item">
                    <p>Github<span><a href='https://github.com/Sathiya8'>https://github.com/Sathiya8</a></span></p>
                  </div>
                  <div className="resume-about-item">
                    <p>Linkedin<span><a href='https://www.linkedin.com/in/sathiya-n-14395a253'>https://www.linkedin.com/in/sathiya-n-14395a253</a></span></p>
                  </div>
                </div>
              
              
               </div>
              }
            </div>
          </div>
      </section>

       {/* New Skills Section */}
           {/* <section className="skills-section" id='skill-section'>

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




 
        </section> */}

        {/* <section className="project-section" id='project-section'>
  <h3>Projects</h3>
  <div className="project-container">
    <div className="project-item">
      <img src={spicy} alt="HTML" />
      <h4>Spicy Hut
      <p>The SpicyHut restaurant website features a responsive UI showcasing their menu, services, and contact details.</p>
      <a href="https://github.com/Nsathiya2003/spicyHut" target="_blank">View code</a>
      </h4>
    </div>
    <div className="project-item">
      <img src={pic} alt="HTML" />
      <h4>User Authentication System
      <p>Implemented a secure user authentication system with login and signup functionality for account access.</p>
      <a href="https://github.com/Nsathiya2003/authentication-frontend" target='_blank'>View Code</a>
      </h4>
    </div>
   
    </div>
</section> */}
{/* <!-- Internship Experience Section --> */}
{/* <section className="internship-section" id="internship-section">
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
</section> */}
{/* Eductaion section */}
  
{/* <div className="education-section" id="education-section">
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
</div> */}



{/* <section className="contact-section" id='contact-section'>
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
        <input type="text" name="username" value={data.username} onChange={handleChange} placeholder='Enter your name' />
         {error.username && <p style={{fontSize:"12px",color:"red"}}>{error.username}</p>}
        <input type="emal" name='email' value={data.email} onChange={handleChange} placeholder='Enter your email' />
        {error.email && <p style={{fontSize:"12px",color:"red"}}>{error.email}</p>}

        <textarea
         type="text" 
         name='message'
         value={data.message} onChange={handleChange}
         aria-multiline
         placeholder='Enter your message'
          />
        {error.message && <p style={{fontSize:"12px",color:"red"}}>{error.message}</p>}

        </div>
        <button type='submit' className='btn' onClick={handleSubmit}>Send</button>

      </div>
    </div>
</section> */}
     {dialogOpen && (
          <DialogBox 
            open={dialogOpen}
            onClose={()=>setDialogOpen(false)}
            data={data}
          />
        )}
    </body>
      

             
  )
}

export default HomePage
