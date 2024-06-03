import React, { Component } from 'react';

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: [
        {
          institution: "Scaler School of Technology",
          specialization: "Some Specialization",
          graduationDate: "Month of passing Year of passing",
          achievements: "some achievements",
        },
        // Add more education entries here
      ],
      work: [
        {
          companyName: "Company Name 1",
          specialization: "Specialization 1",
          monthOfLeaving: "Month",
          yearOfLeaving: "Year",
          achievements: "Achievements 1",
        },
        // Add more work entries here
      ],
      skillsDescription: "Your skills description here",
      skills: [
        { skillname: "Skill 1" },
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
                    <span>&bull;</span> <em className="date">{item.graduationDate}</em>
                  </p>
                  <p>{item.achievements}</p>
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
                    <span>&bull;</span> <em className="date">{item.monthOfLeaving} {item.yearOfLeaving}</em>
                  </p>
                  <p>{item.achievements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillsDescription}</p>

            <div className="bars">
              <ul className="skills">
                {skills.map((item) => (
                  <li key={item.skillname}> {/* Add a key for each item */}
                    <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                    </span>
                    <em>{item.skillname}</em>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
