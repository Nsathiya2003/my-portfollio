import React, { useState,useEffect } from 'react';
import profile from '../assets/sathiya.png';
import resume from '../assets/sathiya_resume.png';
import pic from '../assets/user1.png';
import spicy from '../assets/spicyimg.png';
import portfolio from '../assets/portfolio.png';
import DialogBox from './UsableComponents/DialogBox';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function HomePage() {
  const [dialogOpen,setDialogOpen]=useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    mobileno:"",
    subject:"",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };


  
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_2omatgu",
        "template_5aw2um8",
        {
          name: data.username,
          mobileno: data.mobileno,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        "1nSq_4Y-mQ95uLvmq"
      );
  
      console.log("Email sent successfully:", result.text);
  
      // Check if toast is being executed
      console.log("Showing toast message...");
      toast.success("Your message was sent successfully!");
  
      setData({
        username: "",
        email: "",
        mobileno: "",
        subject: "",
        message: "",
      });
  
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send message. Try again later.");
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


  const [activeSection, setActiveSection] = useState("experience");

  const handleClick = (e,field)=>{
    console.log("helooo")
    e.preventDefault();
    setActiveSection(field);
   }

  const images =[spicy,pic,spicy,pic]
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A sleek and interactive personal portfolio website showcasing skills, projects, and achievements. Designed with a modern UI and smooth animations, it provides visitors with an engaging experience. The site includes sections such as About Me, Projects, Contact, and a dynamic blog feature.",
      tech: "Html,Css,Javascript,React.js",
      image: portfolio, // Replace with actual image
      liveLink: "https://github.com/Nsathiya2003/my-portfollio", // Add actual live link
      githubLink: "https://github.com/Nsathiya2003/my-portfollio", // Add actual GitHub link
    },
    {
      id: 2,
      title: "User Authentication System",
      description: "A full-stack authentication system that ensures secure user login and registration. Features include JWT-based authentication, password hashing using bcrypt, and role-based access control. Users can reset passwords, update profiles, and securely store session tokens.",
      tech: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MySQL",
      image: pic, // Replace with actual image
      liveLink: "https://github.com/Nsathiya2003/authentication-frontend", // Add actual live link
      githubLink: "https://github.com/Nsathiya2003/authentication-frontend", // Add actual GitHub link
    },
    {
      id: 3,
      title: "Spicy Hut",
      description: "A fully responsive restaurant website designed to enhance online food ordering and reservations. It features an interactive menu, customer reviews, contact forms, and a reservation system, optimized for both desktop and mobile users.",
      tech: "HTML, CSS",
      image: spicy, // Replace with actual image
      liveLink: "https://github.com/Nsathiya2003/spicyHut", // Add actual live link
      githubLink: "https://github.com/Nsathiya2003/spicyHut", // Add actual GitHub link
    },
  ];
  
  const [activateSection, setActivateSection] = useState(
    localStorage.getItem("activeSection") || "home"
  );
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  useEffect(() => {
    localStorage.setItem("activeSection", activateSection);
    setIsFirstLoad(false); // After first render, set it to false
  }, [activateSection]);
  
  const handleSectionChange = (section) => {
    setActivateSection(section);
  };
  const [showPdf,setShowPdf] = useState(false);
  


  
  const resumePDF = '/resume.pdf';
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <body>
      <ToastContainer position="top-right" autoClose={3000} />

      <header>
  <a href="#" className="logo">Sathiya</a>

  {/* ✅ Menu Icon (Only Visible on Small Screens) */}
  <i className={`bx bx-menu ${menuOpen ? "bx-x" : ""}`} id="menu-icon" onClick={handleMenuToggle}></i>

  {/* ✅ Navigation Menu */}
  <nav className={menuOpen ? "active" : ""}>
    <a href="#home-section" className={activateSection === "home" ? "active" : ""} onClick={() => handleSectionChange("home")}>
      Home
    </a>
    <a href="#skill-section" className={activateSection === "skills" ? "active" : ""} onClick={() => handleSectionChange("skills")}>
      Skills
    </a>
    <a href="#resume-section" className={activateSection === "resume" ? "active" : ""} onClick={() => handleSectionChange("resume")}>
      Resume
    </a>
    <a href="#projects-section" className={activateSection === "projects" ? "active" : ""} onClick={() => handleSectionChange("projects")}>
      Projects
    </a>
    <a href="#contact-section" className={activateSection === "contact" ? "active" : ""} onClick={() => handleSectionChange("contact")}>
      Contact
    </a>
  </nav>
</header>


      {/*  Bars background*/}
      <div className={`bars-box ${isFirstLoad ? "active" : ""}`}>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bar" style={{ "--i": i + 1 }}></div>
      ))}
    </div>


        {/* ---Home section--- */}
        <section className={`home ${activateSection === 'home' ? 'active' : ''}`}>
        
        <div className="home-detail">
          <h1>SATHIYA N</h1>
          <h2>
            I'm a  
            <span >Software developer</span>
         
          </h2> 
          <p>Versatile and innovative software developer with a strong foundation in full-stack development. Proficient in front-end technologies like HTML, CSS, JavaScript, and React.js, complemented by expertise in backend frameworks such as Java, Node.js, and Express.js. Skilled in managing databases with MySQL and MongoDB, ensuring secure, efficient, and scalable solutions. During my internship at Trugo Technology, I gained hands-on experience in React, Node.js, and MySQL, where I worked on developing dynamic web applications and executing CRUD operations. Adept at building user-focused, high-performance web applications and integrating APIs seamlessly. Passionate about leveraging the MERN stack to create dynamic, reliable, and impactful software solutions. Continuously driven to embrace new challenges, learn emerging technologies, and contribute to delivering exceptional software experiences.                    </p>
          <div className="btn-links">
          <a href="#" className="btn" onClick={() => setShowPdf(true)}>
        View Resume
      </a>
          {showPdf && (
        <div className="pdf-modal">
          <div className="pdf-container">
            {/* Close Button */}
            <button className="close-btn" onClick={() => setShowPdf(false)}>✖</button>
            
            {/* Resume Image */}
            <img src={resume} alt="Resume" className="resume-img" />
          </div>
        </div>
      )}

      {/* Download Link */}
      {/* <a href={resumePDF} download className="btn">
        Download Resume
      </a> */}
           <div className="links">
                <a href="https://github.com/Nsathiya2003" target="_blank"><i className="bx bxl-github" ></i></a>
                <a href="https://www.linkedin.com/in/sathiya-n-14395a253" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
                <a href="nsathiya757@gmail.com"><i className='bx bxl-gmail' target="_blank"></i></a>
                <a href="http://www.whatsapp.com"><i className='bx bxl-whatsapp' target="_blank"></i></a>
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
      <section className={`skills ${activateSection === 'skills' ? 'active' : ''}`}>
     
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
      <section className={`resume ${activateSection === 'resume' ? 'active' : ''}`}>

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
                          color:"lightgreen",}}>Technologies : </strong>JavaScript,React.js,Node.js,Express.js,MySQL</p>
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
      <section className={`projects ${activateSection === 'projects' ? 'active' : ''}`}>
        <h2 className="heading">Latest<span>Projects</span></h2>
        <div className="project-container">
        <div className="project-box">
      {/* Project Details Section */}
          <div className="project-details">
            {projects.map((project, index) => (
              <div key={project.id} className={`project-detail ${index === currentIndex ? "active" : ""}`}>
                {index === currentIndex && (
                  <>
                    <p className="numb">{`0${project.id}`}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech">
                      <p>{project.tech}</p>
                    </div>
                    <div className="live-github">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <i className="bx bx-arrow-back"></i>
                        <span>Live Project</span>
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <i className="bx bxl-github"></i>
                        <span>Github Repository</span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="project-box">
          <div className="project-carousel">
            <div className="img-slide" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: "0.5s ease-in-out" }}>
              {projects.map((project, index) => (
                <div key={index} className="img-item">
                  <img src={project.image} alt={`slide-${index}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="navigation">
            <button className="arrow-left" onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))} disabled={currentIndex === 0}>
              <i className="bx bx-chevron-left"></i>
            </button>
            <button className="arrow-right" onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, projects.length - 1))} disabled={currentIndex === projects.length - 1}>
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
        </div>
      </section>
      <section className={`contact ${activateSection === 'contact' ? 'active' : ''}`}>
    <div className="contact-container">
      <div className="contact-box">
        <h2>Let's Work Together </h2>
        {/* <p className='desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente tempora officia nulla sed magni neque repudiandae fugiat, non modi.</p> */}
        <div className="contact-detail">
            <i className='bx bxs-envelope'></i>
              <div className="detail">
                <p>Email</p>
                <a href="nsathiya757@gmail.com">nsathiya757@gmail.com</a>
              </div>
       </div>
       <div className="contact-detail">
            <i className='bx bxl-github'></i>
              <div className="detail">
                <p>Github</p>
                <a href="https://github.com/Nsathiya2003">View Github</a>
              </div>
       </div>
       <div className="contact-detail">
            <i className='bx bxl-linkedin'></i>
              <div className="detail">
                <p>LinedIn</p>
                <a href='https://www.linkedin.com/in/sathiya-n-14395a253'>View profile</a>
              </div>
       </div>
       <div className="contact-detail">
            <i className='bx bxs-map'></i>
              <div className="detail">
                <p >Address</p>
                <p style={{color:'white'}}>3-313 Pullanur,Salem,Tamilnadu</p>
              </div>
       </div>
      </div>
      <div className="contact-box">
        <form action=''>
          <h2 className='heading'>Contact<span>Me!</span></h2>
           <div className="field-box">
             <input type="text" placeholder='Enter your name' name='username' onChange={handleChange} value={data?.username}/>
             <input type="text" placeholder='Enter your email' name='email' onChange={handleChange} value={data?.email}/>
             <input type="text" placeholder='Enter your mobile no'name='mobileno'onChange={handleChange} value={data?.mobileno}/>
             <input type="text" placeholder='Email subject'name='subject'  onChange={handleChange} value={data?.subject}/>
             <textarea type="text" placeholder='Message' name='message' onChange={handleChange} value={data?.message}/>
           </div>
           <button type='submit' className='btn' onClick={handleSubmit}>Send Message</button>
        </form>
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
