import React from "react";
import "../../styles/about.css";

import aboutImg from "../../images/aboutImg.jpeg";

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First Working Process",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debetis delenti laundantium, at provident consequatur sunt! Et ex non eaque!",
  },

  {
    icon: "ri-team-line",
    title: "Dedicated Team",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debetis delenti laundantium, at provident consequatur sunt! Et ex non eaque!",
  },

  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Support",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime debetis delenti laundantium, at provident consequatur sunt! Et ex non eaque!",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__comtent">
            <h6 className="subtitle">Why Choose Us</h6>
            <h2>Specialists In </h2>
            <h2 className="highlight">Digital Marketing</h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              minus commodi omnis. Quis, optio obcaecati, voluptatum beatae
              eveniet rerum est dicta error aliquam, accusantium adipisci. Fuga
              ipsam quis incidunt quo.
            </p>

            <div className="choose_item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose__us-title">{item.title}</h4>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
