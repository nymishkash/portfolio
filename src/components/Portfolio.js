import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    const portfolioItems = [
      {
        name: "Project 1",
        description: "Description of Project 1",
        imgurl: "images/portfolio/project1.jpg",
        modalId: "modal-01"
      },
      {
        name: "Project 2",
        description: "Description of Project 2",
        imgurl: "images/portfolio/project2.jpg",
        modalId: "modal-02"
      },
      {
        name: "Project 3",
        description: "Description of Project 3",
        imgurl: "images/portfolio/project3.jpg",
        modalId: "modal-03"
      },
      {
        name: "Project 4",
        description: "Description of Project 4",
        imgurl: "images/portfolio/project4.jpg",
        modalId: "modal-04"
      }
    ];

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {portfolioItems.map((item, index) => (
                <div key={index} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={`#${item.modalId}`}>
                      <img src={item.imgurl} className="item-img" alt={item.name} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
