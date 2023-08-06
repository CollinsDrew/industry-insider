import React from "react";

import "../../styles/blog.css";
import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudy from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: "Learn More About The Work we Do....",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Article",
    desc: "Want To Improve The way Your Brand Interacts With Customers? Let's Talk....",
    linkUrl: "#",
  },
  {
    imgUrl: caseStudy,
    title: "Case Study",
    desc: "Boost Your Conversation Rate With Us....",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's Have A Look From Our
            <span className="highlight"> Recent Blog</span>
          </h2>
        </div>

        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="description">{item.desc}</p>
              <div>
                <a href={item.linkUrl} className="learn__more">
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
