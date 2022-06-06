import React from 'react'
import './About.css'

function About() {
   return (
      <div className='about-page'>
         <div className="intro-part">
            <div className="container">
               <div className="left-box">
                  <p className="intro">More than 300M people use ... every month to communicate with an animated GIF that expresses their exact thoughts or feelings.
                  </p>
                  <div className="status">
                     <div className="user-num">
                        <span>300M+</span>
                        <span>monthly users</span>
                     </div>
                     <div className="searches-num">
                        <span>12B+</span>
                        <span>searches every month</span>
                     </div>
                  </div>
               </div>

               <div className="right-box">
                  {/* sekil */}
                  <img src="https://tenor.com/assets/img/about/about-us/hero-phone.png" alt="about-phone" />
               </div>
            </div>
         </div>
         <div className="talking-about">
            <div className="container">
               <h3>People are talking about Tenor.</h3>
               <div className="cards">
                  <div className="card">
                     <p>How ... aims to get GIF-sharing onto every mobile phone</p>
                     <img src="https://tenor.com/assets/img/about/about-us/press/forbes.png" alt="forbes" />
                  </div>
                  <div className="card">
                     <p>The most popular GIF of 2022 actually perfectly sums up 2022</p>
                     <img src="https://tenor.com/assets/img/about/about-us/press/cnn.png" alt="cnn" />
                  </div>
                  <div className="card">
                     <p>There's a reason you're seeing those doughnut GIFs</p>
                     <img src="https://tenor.com/assets/img/about/about-us/press/bloomberg.png" alt="bloomberg" />
                  </div>
                  <div className="card">
                     <p>... hits 12B GIF searches every month</p>
                     <img src="https://tenor.com/assets/img/about/about-us/press/techcrunch.png" alt="techcrunch" />
                  </div>
               </div>
            </div>
         </div>

         <div className="meet-team">
            <div className="container">
               <div className="left-box">
                  <img src="https://softservellc.org/assets/img/meet-our-team-gif.gif" alt="founders" />
               </div>
               <div className="right-box">
                  <h3>Meet the Team</h3>
                  <p>
                     ... was founded by an amateur in 2022 to define a new visual language for 3+ billion mobile users worldwide. <br />
                     ..., we are happy to be supported by investors.
                  </p>
                  <span className='c'>© 2022 ... . All rights reserved.</span>
               </div>
            </div>
         </div>

         {/* ... */}
      </div>
   )
}

export default About