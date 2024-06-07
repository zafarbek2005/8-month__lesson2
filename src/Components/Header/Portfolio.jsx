import { AiFillGithub } from "react-icons/ai"; 
import { AiFillLinkedin } from "react-icons/ai"; 
import { FaTelegramPlane } from "react-icons/fa"; 
import { AiOutlineInstagram } from "react-icons/ai"; 
import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import bg from './img/ng.jpg'
import k1 from './img/k1.jpeg'
import k2 from './img/k2.jpeg'
import k3 from './img/k3.jpeg'
import Logo from './img/logo.jpg'

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shrink, setShrink] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={shrink ? 'shrink' : ''}>
        <div className="Navbar container">
          <div className="nav__logo">
            <img src= {Logo} alt="" />
          </div>
          <div className={`nav_items ${isOpen ? 'open' : ''}`}>
            <a href="#">Home</a>
            <a href="#About">About</a>
            <a href="#projects">Projects</a>  
            <a href="#contact">Contact</a>
            <a href="https://www.canva.com/design/DAGHSnwE8Jg/2dxufwgo6l_yu2E_hR9RUg/edit" target="_blank">My Resume</a>
          </div>
          <button className={`nav_toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
        {isOpen && <div className="overlay" onClick={handleClose}></div>}
      </header>


      <main>

        <section>
          
                <div
                style={{backgroundImage: `url(${bg})`
                ,backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '750px',
                w100: '100%',
                }}
                >
                <div className="hero container">

                  <h3>HEY, I'M ZAFARBEK KARIMBOYEV</h3>
                  <p>A Result-Oriented Web br Developer building and managing Websites and Web <br /> Applications that leads to the success of the overall product</p>
                  <a href="#projects"><button>Projects</button></a>

                </div>

                <div className="container">
                {/* <div className="hero__icons">
               <div className="iconhero">
                  <a href="https://www.instagram.com/zafarbek_20.05/"  target="_blank"><span><AiOutlineInstagram /></span></a>
                      <a href="https://t.me/ZAFARBEK_1337" target="_blank"><span><FaTelegramPlane /></span></a>
                    <a href="https://uz.linkedin.com/">
                    <span><AiFillLinkedin /></span>
                    </a>
                  <a href="https://github.com/zafarbek2005/  ">
                  <span><AiFillGithub /></span>
                  </a>
               </div>
                </div> */}
                
                </div>
                
                
                </div>
        </section>
        <section id='About' className='container'>
          <div className="about">
                <h3>ABOUT ME</h3>
                <p>Here you will find more information about me, what I do, and my current skills mostly in terms <br /> of programming and technology</p>
              </div>  

                <div className="skills">
                    <div className="txt">
                                <h3>Get to know me!</h3>
                                <p>I'm a Frontend Focused Web Developer building and managing the <br /> Front-end of Websites and Web Applications that leads to the success of <br /> the overall product. Check out some of my work in the Projects section. <br />

        I also like sharing content related to the stuff that I have learned over the <br /> years in Web Development so it can help other people of the  Dev  <br />
        Community. Feel free to Connect or Follow me on my Linkedin and <br /> Instagram where I post useful content related to Web Development and <br /> Programming <br /> <br />

        I'm open to Job opportunities where I can contribute, learn and grow. If  <br />
        you have a good opportunity that matches my skills and experience then  <br />
        don't hesitate to contact me.</p>

                 <a href="#contact">
                 <button>contact me</button>
                 </a>
                    </div>

                    <div className="btnsskil">
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>JavaScript</button>
                        <button>React JS</button> 
                        <button>React redux</button>
                        <button>ZUSTAND</button>
                        <button>Redux toolkit</button> 
                        <button>Rtk Query</button>
                        <button>SASS</button>
                        <button>Tailwind</button>
                        <button>Mui</button>
                        <button>GIT</button> 
                        <button>Github</button>
                    </div>
                </div>
        </section>

        <section id='projects' className='container'>

                <h3>PROJECTS</h3>
                <p>Here you will find some of the personal and clients projects that I created with each project <br /> containing its own case study</p>

                <div className="k1">

                    <div className="kimg">
                          <img src= {k1} alt="" />
                    </div>

                    <div className="ktext">
                          <h3>Dopefolio</h3>
                          <p>Dopefolio is a successful Open-Source project that I created <br /> which have been featured on some of  the biggest tech sites <br /> like CSS-Tricks, Hostinger, etc & used by thousands of <br /> developers globally</p>
                           
                          <a href="https://exam-7-phi.vercel.app/" target='_blank'> <button>CASE STUDY</button></a>
                       </div>

                       </div>

                <div className="k1">

                    <div className="kimg">
                          <img src= {k2} alt="" />
                    </div>

                    <div className="ktext">
                          <h3>Dopefolio</h3>
                          <p>Dopefolio is a successful Open-Source project that I created <br /> which have been featured on some of  the biggest tech sites <br /> like CSS-Tricks, Hostinger, etc & used by thousands of <br /> developers globally</p>
                           
                          <a href="https://exam-7-phi.vercel.app/" target='_blank'> <button>CASE STUDY</button></a>
                       </div>

                       </div>

                <div className="k1">

                    <div className="kimg">
                          <img src= {k3} alt="" />
                    </div>

                    <div className="ktext">
                          <h3>Dopefolio</h3>
                          <p>Dopefolio is a successful Open-Source project that I created <br /> which have been featured on some of  the biggest tech sites <br /> like CSS-Tricks, Hostinger, etc & used by thousands of <br /> developers globally</p>
                           
                          <a href="https://exam-7-phi.vercel.app/" target='_blank'> <button>CASE STUDY</button></a>
                       </div>

                       </div>

        </section>
        
        <section id='contact'          
  style={{
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '800px',
    width: '100%',
  }}
>
  <div className="contact_sentr container">
    <h3>CONTACT</h3>
    <p>Feel free to contact me by submitting the form below and I will get back to you as soon as <br /> possible</p>
  </div>

  <div className="inputs container">
    <form id="contactForm">
      <input type="text" name="name" placeholder='Enter your name' required/> 
      <input type="text" name="email" placeholder='Enter your email' required/>
      <textarea id='area' name="message" placeholder='Enter your message'></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</section>


    <section id='footer'>
        <footer>
          <div className="txtss">
              <div className="h3">
                  <h3>KARIMBOYEV ZAFARBEK</h3>  
                  <p>A Frontend focused Web Developer building the Frontend of Websites and <br /> Web Applications that leads to the success of the overall product</p>
              </div>

              <div className="social">
                <h3>SOCIAL</h3>
                <a href="https://www.instagram.com/zafarbek_20.05/"  target="_blank"><span><AiOutlineInstagram /></span></a>
                  <a href="https://t.me/ZAFARBEK_1337" target="_blank"><span><FaTelegramPlane /></span></a>
                 <a href="https://uz.linkedin.com/">
                 <span><AiFillLinkedin /></span>
                 </a>
               <a href="https://github.com/zafarbek2005/  ">
               <span><AiFillGithub /></span>
               </a>
              </div>
          </div>

        <div className="lime"></div>
          <p id="copyright">© Copyright 2024 . Made by <a href="https://t.me/ZAFARBEK_1337" target="_blank">Zafarbek Karimboyev</a></p>
        </footer>


    </section>





      </main>
    </>
  );
};

export default Portfolio;
