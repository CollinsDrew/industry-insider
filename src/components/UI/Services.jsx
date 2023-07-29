import React from "react";

import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit, amet elit. Harum molestias ullam laborum possimus porro error sunt officiis.",
  },
  {
    icon: "ri-advertisement-line",
    title: "Brand Awareness",
    desc: "Lorem ipsum dolor sit, amet elit. Harum molestias ullam laborum possimus porro error sunt officiis.",
  },
  {
    icon: "ri-camera-lens-fill",
    title: "Social Media",
    desc: "Lorem ipsum dolor sit, amet elit. Harum molestias ullam laborum possimus porro error sunt officiis.",
  },
  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit, amet elit. Harum molestias ullam laborum possimus porro error sunt officiis.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save Time Promoting Your Business With</h2>
          <h2 className="highlight">Our Best Service</h2>
        </div>

        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i class={item.icon}></i>
              </span>
              <h3 className="services__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
