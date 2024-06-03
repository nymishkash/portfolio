import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
                  I am currently a Computer Science student at Scaler School of Technology, Bengaluru. I did my schooling from Excel Public School in my hometown Mysuru.
                  
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Nymish Kashivishwanath</span>
                     <br></br>
       						   <span>
                     Bengaluru, India.
                    </span>
                    <br></br>
                    <span>github.com/nymishkash</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}