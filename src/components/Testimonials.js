import React, { Component } from 'react';

export default class Testimonials extends Component {
  render() {
    const testimonials = [
      {
        description: "This is a fantastic product! Highly recommended.",
        name: "John Doe"
      },
      {
        description: "A truly outstanding experience, exceeded all expectations.",
        name: "Jane Smith"
      },
      {
        description: "Remarkable service and attention to detail. I am very satisfied.",
        name: "Michael Johnson"
      },
      {
        description: "Exceptional quality and great customer support.",
        name: "Emily Davis"
      }
    ];

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {testimonials.map((item, index) => (
                    <li key={index}>
                      <blockquote>
                        <p>
                          {item.description}
                        </p>
                        <cite>{item.name}</cite>
                      </blockquote>
                    </li>
                  ))}
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
    );
  }
}
