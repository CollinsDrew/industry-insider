import React from "react";
import "../../styles/testamonial.css";

import Slider from "react-slick";

import ava01 from "../../images/ava-1.jpeg";
import ava02 from "../../images/ava-2.jpeg";
import ava03 from "../../images/ava-3.jpeg";

const Testamonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testamonials</h6>
          <h2>
            Trusted By More Than{" "}
            <span className="highlight">500 Customers</span>
          </h2>
        </div>

        <div className="slider__wrapper">
          <Slider {...settings}>
            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur possimus assumenda qui cum modi beatae dolores
                numquam, sunt reiciendis dolor rerum officiis doloremque ab
                eligendi ratione blanditiis? Laboriosam, possimus! Repellendus,
                numquam sint nisi aspernatur eveniet cumque. Unde, doloremque!
                Excepturi, optio!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava01} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">John Doe</h5>
                  <p className="description">CEO, Workcreation</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur possimus assumenda qui cum modi beatae dolores
                numquam, sunt reiciendis dolor rerum officiis doloremque ab
                eligendi ratione blanditiis? Laboriosam, possimus! Repellendus,
                numquam sint nisi aspernatur eveniet cumque. Unde, doloremque!
                Excepturi, optio!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava02} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Anne Martin</h5>
                  <p className="description">Sr. Product Designer</p>
                </div>
              </div>
            </div>

            <div className="slider__item">
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur possimus assumenda qui cum modi beatae dolores
                numquam, sunt reiciendis dolor rerum officiis doloremque ab
                eligendi ratione blanditiis? Laboriosam, possimus! Repellendus,
                numquam sint nisi aspernatur eveniet cumque. Unde, doloremque!
                Excepturi, optio!
              </p>

              <div className="customer__details">
                <div className="customer__img">
                  <img src={ava03} alt="" />
                </div>
                <div>
                  <h5 className="customer__name">Jack Tate</h5>
                  <p className="description">Head Of Marketing</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testamonial;
