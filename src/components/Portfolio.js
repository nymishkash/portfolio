import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    const portfolioItems = [
      {
        name: "Python Web Scraper",
        description: "Web scraper built using BeautifulSoup to retrieve and compare prices from Amazon and Flipkart.",
        imgurl: "images/portfolio/web-scraper.png",
        modalId: "https://github.com/nymishkash/python-web-scraper"
      },
      {
        name: "Streambox by Nymish",
        description: "An audio streaming web application built using HTML, CSS and Javascript.  ",
        imgurl: "images/portfolio/streambox.jpeg",
        modalId: "https://github.com/nymishkash/streambox-by-nymish"
      },
      {
        name: "Razorpay Payment Gateway Integration",
        description: "A payment gateway integration using Razorpay API.",
        imgurl: "images/portfolio/payment.jpeg",
        modalId: "modal-03"
      },
      {
        name: "Car Rental System",
        description: "A car rental system built using SpringBoot, MySQL and Java backend.",
        imgurl: "images/portfolio/car-rental.jpeg",
        modalId: "https://github.com/nymishkash/car-rental-system"
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
                    <a href={`${item.modalId}`}>
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
