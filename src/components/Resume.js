import React, { Component } from 'react';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          image: "",
          institution: "Scaler School of Technology",
          location: "Bengaluru, India",
          specialization: "Integrated BS and MS in Computer Science",
          graduationDate: "July 2027",
          achievements: "some achievements",
        },
        {
          image: "",
          institution: "Excel Public School",
          location: "Mysuru, India",
          specialization: "AISSE (10th) and AISSCE (12th)",
          graduationDate: "April 2023",
          achievements: "some achievements",
        }
        // Add more education entries here
      ],
      work: [
        {
          companyName: "ExcelSoft Technologies Pvt. Ltd.",
          specialization: "Data Science and ML Intern",
          monthOfLeaving: "May 2022",
          yearOfLeaving: "",
          achievements: "Achievements 1",
        },
        // Add more work entries here
      ],
      skillsDescription: "Your skills description here",
      skills: [
        { skillname: "" },
        { skillname: "Skill 2" },
        // Add more skills here
      ],
    };
  }

  render() {
    const { education, work, skillsDescription, skills } = this.state;

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {education.map((item) => (
              <div className="row item" key={item.institution}> {/* Add a key for each item */}
                <div className="twelve columns">
                  <h3>{item.institution}</h3>
                  <p className="info">
                    {item.specialization}
                    
                  </p>
                  <p>
                  <em className="date">{item.graduationDate}</em>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work.map((item) => (
              <div className="row item" key={item.companyName}> {/* Add a key for each item */}
                <div className="twelve columns">
                  <h3>{item.companyName}</h3>
                  <p className="info">
                    {item.specialization}
                  </p>
                  <p>
                  <em className="date">{item.monthOfLeaving} {item.yearOfLeaving}</em>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
{/* <!--
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {skills.map((item) => (
                  <li key={item.skillname}> 
                    <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                    </span>
                    <em>{item.skillname}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
 --> */}

      </section>
    );
  }
}
